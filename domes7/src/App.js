import React, { Component } from 'react'
import "./index.css"
import { BrowserRouter } from "react-router-dom"
import Router from "./router"
// import store from "./store"
// import { Provider } from "react-redux"
export default class App extends Component {
  render() {
    return (
      // <Provider store={store}>
      <BrowserRouter>
        <Router></Router>
      </BrowserRouter>
      // </Provider>
    )
  }
}
