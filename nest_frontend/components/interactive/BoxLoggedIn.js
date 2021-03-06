import React, { useContext } from "react"
import BoxFull from "../base/BoxFull"
import LoggedInUser from "./LoggedInUser"
import Button from "../base/Button"
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons"
import ContextUser from "../../contexts/ContextUser"
import { useHistory } from "react-router"
import Style from "./BoxLoggedIn.module.css"
import CurrentServer from "./CurrentServer"
import useStrings from "../../hooks/useStrings"


/**
 * A {@link BoxFull} displaying the user's current login status, and allowing them to logout.
 *
 * @param props - Additional props to pass to the box.
 * @returns {JSX.Element}
 * @constructor
 */
export default function BoxLoggedIn({ ...props }) {
    const { logout } = useContext(ContextUser)
    const history = useHistory()
    const strings = useStrings()

    return (
        <BoxFull header={strings.loggedInTitle} {...props}>
            <div className={Style.BoxLoggedInContents}>
                <div>
                    {strings.loggedInOn} <CurrentServer/> {strings.loggedInAs} <LoggedInUser/>.
                </div>
                <div>
                    <Button
                        color={"Red"} onClick={() => {
                        logout()
                        history.push("/")
                    }} icon={faSignOutAlt}
                    >{strings.logout}</Button>
                </div>
            </div>
        </BoxFull>
    )
}
