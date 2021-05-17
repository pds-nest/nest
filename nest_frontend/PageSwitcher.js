import React from "react"
import { Route, Switch } from "react-router"
import PageLogin from "./routes/PageLogin"
import PageRepositories from "./routes/PageRepositories"
import PageAlerts from "./routes/PageAlerts"
import PageSettings from "./routes/PageSettings"
import PageDashboard from "./routes/PageDashboard"
import PageRoot from "./routes/PageRoot"
import PageEdit from "./routes/PageEdit"
import PageUsers from "./routes/PageUsers"
import PageRepository from "./routes/PageRepository"


export default function PageSwitcher({ ...props }) {
    return (
        <Switch {...props}>
            <Route path={"/repositories/:id/edit"} exact={true}>
                <PageEdit/>
            </Route>
            <Route path={"/repositories/:id"} exact={true}>
                <PageRepository/>
            </Route>
            <Route path={"/login"} exact={true}>
                <PageLogin/>
            </Route>
            <Route path={"/users"} exact={true}>
                <PageUsers/>
            </Route>
            <Route path={"/repositories"} exact={true}>
                <PageRepositories/>
            </Route>
            <Route path={"/alerts"} exact={true}>
                <PageAlerts/>
            </Route>
            <Route path={"/settings"} exact={true}>
                <PageSettings/>
            </Route>
            <Route path={"/dashboard"} exact={true}>
                <PageDashboard/>
            </Route>
            <Route path={"/"}>
                <PageRoot/>
            </Route>
        </Switch>
    )
}