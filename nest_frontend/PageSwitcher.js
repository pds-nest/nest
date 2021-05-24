import React from "react"
import { Route, Switch } from "react-router"
import PageLogin from "./routes/PageLogin"
import PageRepositoriesList from "./routes/PageRepositoriesList"
import PageRepositoryAlerts from "./routes/PageRepositoryAlerts"
import PageSettings from "./routes/PageSettings"
import PageRepositoryCreate from "./routes/PageRepositoryCreate"
import PageRepositoryEdit from "./routes/PageRepositoryEdit"
import PageUsers from "./routes/PageUsers"
import PageRepositoryAnalyze from "./routes/PageRepositoryAnalyze"
import PageShare from "./routes/PageShare"


export default function PageSwitcher({ ...props }) {
    return (
        <Switch {...props}>
            <Route path={"/repositories/create"} exact={true}>
                <PageRepositoryCreate/>
            </Route>
            <Route path={"/repositories/:id/alerts"} exact={true}>
                <PageRepositoryAlerts/>
            </Route>
            <Route path={"/repositories/:id/share"} exact={true}>
                <PageShare/>
            </Route>
            <Route path={"/repositories/:id/edit"} exact={true}>
                <PageRepositoryEdit/>
            </Route>
            <Route path={"/repositories/:id"} exact={true}>
                <PageRepositoryAnalyze/>
            </Route>
            <Route path={"/users"} exact={true}>
                <PageUsers/>
            </Route>
            <Route path={"/repositories"} exact={true}>
                <PageRepositoriesList/>
            </Route>
            <Route path={"/settings"} exact={true}>
                <PageSettings/>
            </Route>
            <Route path={"/"}>
                <PageLogin/>
            </Route>
        </Switch>
    )
}
