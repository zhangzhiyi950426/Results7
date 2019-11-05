import React from 'react'
import { Switch, Route, Redirect } from "react-router-dom"
function RouterView(props) {
    let { routes } = props
    let routeArr = routes && routes.filter(item => !item.redirect)
    let redirectArr = routes && routes.filter(item => item.redirect).map((item, index) =>
        <Redirect key={index} from={item.path} to={item.redirect}></Redirect>)
    return (
        <Switch>
            {
                routeArr.map((item, index) =>
                    <Route key={index} path={item.path} render={(props) => {
                        return <item.component {...props} children={item.children}></item.component>
                    }}></Route>
                ).concat(redirectArr)
            }
        </Switch>
    )
}
export default RouterView