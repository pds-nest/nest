from flask import render_template, abort, jsonify, request
from ...database import *
from flask_jwt_extended import jwt_required
from ...gestione import *
from flask_cors import cross_origin


@cross_origin()
@jwt_required()
def page_user_delete():
    """
    API call that allows an user to be deleted from NEST.
    :form email: The email of the user that needs to be removed.
    :return: JSON-formatted data. If the user has the privilege, the target user exists and differs from the current
    user, the target gets deleted and a json containing the field "result":"success" is returned.
    """
    user = find_user(get_jwt_identity())
    if not user.isAdmin:
        return jsonify({"result": "failure", "msg": "User is not admin."}), 403
    target = find_user(request.json.get('email'))
    if not target:
        return jsonify({"result": "failure", "msg": "User not found."}), 404
    if user == target:
        return jsonify({"result": "failure", "msg": "The user cant delete himself. Its a sin."}), 406
    Base.session.remove(target)
    Base.session.commit()
    return jsonify({"result": "success", "content":"The user has been deleted."})