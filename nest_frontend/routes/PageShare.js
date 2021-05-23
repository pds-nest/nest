import React, { useCallback, useContext } from "react"
import classNames from "classnames"
import BoxHeader from "../components/base/BoxHeader"
import ContextLanguage from "../contexts/ContextLanguage"
import Style from "./PageShare.module.css"
import BoxUserList from "../components/interactive/BoxUserList"
import useBackendViewset from "../hooks/useBackendViewset"
import { useParams } from "react-router"
import ContextUser from "../contexts/ContextUser"


export default function PageShare({ className, ...props }) {
    const { strings } = useContext(ContextLanguage)
    const {user: loggedUser} = useContext(ContextUser)
    const { id } = useParams()
    const {resources: users, running: usersBvRunning} = useBackendViewset(
        "/api/v1/users/",
        "email",
        {
            list: true,
            create: false,
            retrieve: false,
            edit: false,
            destroy: false,
            command: false,
            action: false,
        }
    )
    const {resources: authorizations, createResource: createAuthorization, destroyResource: destroyAuthorization, running: authBvRunning} = useBackendViewset(
        `/api/v1/repositories/${id}/authorizations/`,
        "email",
        {
            list: true,
            create: true,
            retrieve: false,
            edit: false,
            destroy: true,
            command: false,
            action: false,
        }
    )

    const shareWith = useCallback(
        user => {
            console.info("Authorizing ", user, " ...")
            createAuthorization({rid: id, email: user.email})
        },
        [createAuthorization, id]
    )

    const unshareWith = useCallback(
        user => {
            console.info("Deauthorizing ", user, " ...")
            destroyAuthorization(user.email)
        },
        [destroyAuthorization, id]
    )

    return (
        <div className={classNames(Style.PageShare, className)} {...props}>
            <BoxHeader className={Style.Header}>
                {strings.repoShare}
            </BoxHeader>
            <BoxUserList
                className={Style.UserList}
                users={users.filter(user => user["email"] !== loggedUser["email"] && !authorizations.map(a => a.email).includes(user.email))}
                shareWithUser={shareWith}
                header={strings.availableUsers}
                running={usersBvRunning && authBvRunning}
            />
            <BoxUserList
                className={Style.SharingWith}
                users={users.filter(user => user["email"] === loggedUser["email"] || authorizations.map(a => a.email).includes(user.email))}
                unshareWithUser={unshareWith}
                header={strings.sharingWith}
                running={usersBvRunning && authBvRunning}
            />
        </div>
    )
}