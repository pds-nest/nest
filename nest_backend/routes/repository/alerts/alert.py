from flask import render_template, abort, jsonify, request
from nest_backend.database import *
from flask_jwt_extended import jwt_required, get_jwt_identity
from nest_backend.gestione import *
from flask_cors import cross_origin
import datetime
import nest_backend.errors as errors


@cross_origin()
@jwt_required()
def page_alert(aid):
    """
    ---
    get:
        summary: Get details about an alert.
        parameters:
        - in: path
          schema: AlertParameterSchema
        security:
        - jwt: []
        responses:
            '200':
                description: The details about the requested alert. The schema is incapsulated in Success.
                content:
                    application/json:
                        schema: Alert
            '404':
                description: Could not find the requested repository.
                content:
                    application/json:
                        schema: Error
            '403':
                description: The user is not authorized.
                content:
                    application/json:
                        schema: Error
            '401':
                description: The user is not logged in.
                content:
                    application/json:
                        schema: Error
        tags:
            - alert-related
    delete:
        summary: Deletes an alert.
        parameters:
        - in: path
          schema: AlertParameterSchema
        security:
        - jwt: []
        responses:
            '204':
                description: The repository has been deleted successfully.
            '404':
                description: Could not find the requested repository.
                content:
                    application/json:
                        schema: Error
            '403':
                description: The user is not authorized.
                content:
                    application/json:
                        schema: Error
            '401':
                description: The user is not logged in.
                content:
                    application/json:
                        schema: Error
            '500':
                description: Could not delete the repository.
                content:
                    application/json:
                        schema: Error
        tags:
            - alert-related
    patch:
        summary: Updates an alert.
        security:
        - jwt: []
        requestBody:
            required: true
            content:
                application/json:
                    schema: Alert
        parameters:
        - in: path
          schema: AlertParameterSchema

        responses:
            '200':
                description: The alert has been updated successfully.
                content:
                    application/json:
                        schema: Alert
            '404':
                description: Could not find the requested repository.
                content:
                    application/json:
                        schema: Error
            '403':
                description: The user is not authorized.
                content:
                    application/json:
                        schema: Error
            '401':
                description: The user is not logged in.
                content:
                    application/json:
                        schema: Error
        tags:
            - alert-related
    put:
        summary: Overrides an alert and the conditions.
        security:
        - jwt: []
        requestBody:
            required: true
            content:
                application/json:
                    schema: Alert
        parameters:
        - in: path
          schema: AlertParameterSchema

        responses:
            '200':
                description: The alert has been updated successfully.
                content:
                    application/json:
                        schema: Alert
            '404':
                description: Could not find the requested repository.
                content:
                    application/json:
                        schema: Error
            '403':
                description: The user is not authorized.
                content:
                    application/json:
                        schema: Error
            '401':
                description: The user is not logged in.
                content:
                    application/json:
                        schema: Error
        tags:
            - alert-related
    """
    user = find_user(get_jwt_identity())
    alert = Alert.query.filter_by(id=aid).first()
    if not alert or alert.repository.is_deleted:
        return json_error("Could not find alert.", errors.ALERT_NOT_FOUND), 404
    if alert.repository not in [a.repository for a in user.authorizations] + user.owner_of:
        return json_error("You are not authorized to proceed.", errors.USER_NOT_AUTHORIZED), 403
    if request.method == "GET":
        return json_success(alert.to_json()), 200
    if alert.repository not in user.owner_of:
        return json_error("You are not authorized to proceed.", errors.REPOSITORY_NOT_OWNER), 403
    if request.method == "PATCH":
        if request.json is None:
            return json_error("Missing json content.", errors.GENERIC_NO_JSON), 400

        if 'name' in request.json:
            alert.name = request.json['name']
        if 'limit' in request.json:
            alert.limit = request.json['limit']
        if 'window_size' in request.json:
            alert.window_size = request.json['window_size']
        if 'evaluation_mode' in request.json:
            try:
                alert.evaluation_mode = ConditionMode(request.json['evaluation_mode'])
            except KeyError:
                return json_error("Unknown `evaluation_mode` specified.", errors.GENERIC_ENUM_INVALID), 400
            except Exception as e:
                return json_error("Unknown error:" + str(e), errors.GENERIC_UFO), 400
        ext.session.commit()
        return json_success(alert.to_json()), 200
    elif request.method == "DELETE":
        try:
            for elem in alert.conditions:
                condition = elem.condition
                ext.session.delete(elem)
                ext.session.commit()
                if not condition.repository_id:
                    ext.session.delete(condition)
                    ext.session.commit()
            for notification in alert.notifications:
                ext.session.delete(notification)
                ext.session.commit()
            ext.session.delete(alert)
            ext.session.commit()
        except Exception as e:
            return json_error("Something went wrong while deleting alert.", errors.ALERT_DELETION_FAILURE), 500
        return json_success("Deletion completed."), 204
    elif request.method == "PUT":
        if request.json is None:
            return json_error("Missing json content.", errors.GENERIC_NO_JSON), 400

        if not json_request_authorizer(request.json, alert):
            return json_error("Missing one or more parameters in alert json.", errors.GENERIC_MISSING_FIELDS), 400
        alert.limit = request.json['limit']
        alert.name = request.json['name']
        alert.window_size = request.json['window_size']
        if (mode := request.json.get("evaluation_mode")) is not None:
            try:
                alert.evaluation_mode = ConditionMode(mode)
            except KeyError:
                return json_error("Unknown `evaluation_mode` specified.", errors.GENERIC_ENUM_INVALID), 400
            except Exception as e:
                return json_error("Unknown error:" + str(e), errors.GENERIC_UFO), 400
        if request.json['conditions'] is not None:
            # Wow very pythonic so much wow
            # Obtain list of no longer needed connections
            to_be_deleted = [c.cid for c in alert.conditions if
                             c.cid not in [json['id'] for json in request.json['conditions']]]
            # RIP AND TEAR UNTIL ITS DONE
            for elem in to_be_deleted:
                conn = MadeOf.query.filter_by(cid=elem, aid=alert.id).first()
                if conn:
                    ext.session.delete(conn)
                    ext.session.commit()
            for c in request.json['conditions']:
                if not c.get("id"):
                    if (type_ := c.get("type")) is None:
                        return json_error("Missing `type` parameter.", errors.GENERIC_MISSING_FIELDS), 400
                    try:
                        type_ = ConditionType(type_)
                    except KeyError:
                        return json_error("Unknown `type` specified.", errors.GENERIC_ENUM_INVALID), 400
                    except Exception as e:
                        return json_error("Unknown error: " + str(e)), 400
                    if not (content := c.get("content")):
                        return json_error("Missing `content` parameter.", errors.GENERIC_MISSING_FIELDS), 400
                    if type_ == ConditionType.hashtag:
                        content = hashtag_validator(content)
                    con = Condition(content=content, type=type_, repository_id=alert.repository_id)
                    ext.session.add(con)
                    ext.session.commit()
                    conn = MadeOf(aid=alert.id, cid=con.id)
                    ext.session.add(conn)
                    ext.session.commit()
        return json_success(alert.to_json()), 200
