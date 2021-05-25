import React, { useContext } from "react"
import Style from "./PageRepositoryAlerts.module.css"
import BoxFull from "../components/base/BoxFull"
import ContextLanguage from "../contexts/ContextLanguage"
import BoxHeader from "../components/base/BoxHeader"
import { useHistory, useParams } from "react-router"
import { faBell, faPlus } from "@fortawesome/free-solid-svg-icons"
import PageWithHeader from "../components/base/layout/PageWithHeader"
import ButtonHeader from "../components/base/ButtonHeader"
import makeIcon from "../utils/makeIcon"


export default function PageRepositoryAlerts({ children, className, ...props }) {
    const { strings } = useContext(ContextLanguage)
    const { id } = useParams()
    const history = useHistory()

    return (
        <PageWithHeader
            header={
                <BoxHeader className={Style.Header}>
                    {makeIcon(faBell)} {strings.alerts}
                </BoxHeader>
            }
            buttons={
                <ButtonHeader
                    icon={faPlus}
                    color={"Green"}
                    onClick={() => history.push(`/repositories/${id}/alerts/create`)}
                >
                    {strings.alertCreate}
                </ButtonHeader>
            }
        >
            <BoxFull header={strings.alertTitle} className={Style.YourAlerts}>
                {strings.notImplemented}
            </BoxFull>
        </PageWithHeader>
    )
}
