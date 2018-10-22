import React, { Component } from "react"
import {
    Route,
    Switch,
    BrowserRouter
} from "react-router-dom"
import Login from "./view/auth/Login.jsx"
import Panel from "./view/layout/Panel.jsx"

 
class Main extends Component {
  render() {
    return (<div>
            <BrowserRouter >
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route path="/admin" component={Panel} />
                </Switch>
            </BrowserRouter>
            </div>);
  }
}
export default Main;