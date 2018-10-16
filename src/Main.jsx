import React, { Component } from "react"
import {
    Route,
    Switch,
    BrowserRouter
} from "react-router-dom"
import Login from "./view/auth/Login.jsx"
import Panel from "./view/layout/Panel.jsx"
// import Home from "./view/Home"
import Stuff from "./view/Stuff"
import Contact from "./view/Contact"

 
class Main extends Component {
  render() {
    return (<div>
            <BrowserRouter >
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route path="/admin" component={Panel} />
                    {/* <Route path="/admin/user" component={Panel} /> */}
                    <Route path="/stuff" component={Stuff} />
                    <Route path="/contact" component={Contact} />
                </Switch>
            </BrowserRouter>
            </div>);
  }
}
export default Main;