import React, { Component } from "react"
import {
    Route,
    Switch
} from "react-router-dom"
import Login from "./Login"
import Panel from "./Panel.jsx"
// import Home from "./Home"
import Stuff from "./Stuff"
import Contact from "./Contact"

 
class Main extends Component {
  render() {
    return (<div><Switch>
                <Route exact path="/" component={Login} />
                <Route path="/admin" component={Panel} />
                <Route path="/admin/user" component={Panel} />
                <Route path="/stuff" component={Stuff} />
                <Route path="/contact" component={Contact} />
                </Switch></div>);
  }
}
export default Main;