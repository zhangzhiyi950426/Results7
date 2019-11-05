import React, { Component } from 'react'
import routes from "./routertoor"
import RouterView from "./routerRou"
export default class router extends Component {
    render() {
        return (
            <RouterView routes={routes}></RouterView>
        )
    }
}
