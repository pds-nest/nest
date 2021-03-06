import React, { useContext } from "react"
import Style from "./Sidebar.module.css"
import classNames from "classnames"
import Logo from "../interactive/Logo"
import ButtonSidebar from "../base/ButtonSidebar"
import { faCog, faHome, faKey, faUserCog } from "@fortawesome/free-solid-svg-icons"
import ContextUser from "../../contexts/ContextUser"
import useStrings from "../../hooks/useStrings"


/**
 * The sidebar of the website, with the logo, buttons to switch between the various pages and a notification counter.
 *
 * @param className - Additional class(es) to be added to the outer container.
 * @param props - Additional props to be passed to the outer container.
 * @returns {JSX.Element}
 * @constructor
 */
export default function Sidebar({ className, ...props }) {
    const { user } = useContext(ContextUser)
    const strings = useStrings()

    return (
        <aside className={classNames(Style.Sidebar, className)} {...props}>
            <Logo/>
            {
                user ?
                <>
                    <ButtonSidebar to={"/repositories"} icon={faHome}>{strings.dashboard}</ButtonSidebar>
                    <ButtonSidebar to={"/settings"} icon={faCog}>{strings.settings}</ButtonSidebar>
                </>
                     :
                <>
                    <ButtonSidebar to={"/"} icon={faKey}>{strings.login}</ButtonSidebar>
                </>
            }
            {
                user && user.isAdmin ?
                <>
                    <ButtonSidebar to={"/users"} icon={faUserCog}>{strings.users}</ButtonSidebar>
                </>
                                     :
                null
            }
        </aside>
    )
}
