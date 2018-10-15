import React, { Component } from 'react';
import  Navbar  from "./Navbar";
import  Sidebar  from "./Sidebar";
import { isLogin } from "../auth/CheckAuth";
import {
    Route,
    Switch, NavLink
} from "react-router-dom"
import Dashboard from "../dashboard/Dashboard"
import User from "../user/User"
import AddUser from "../user/AddUser"
class Panel extends Component {
    
    componentWillMount(){
        // let token = localStorage.getItem('token');
        
        if(!isLogin()){
            // this.props.history.push('/');
        }
        // console.log(isLogin())
        
    }

    render(){
        return(
            <React.Fragment>
            <Navbar />
                <div id="wrapper">
                   <Sidebar/>
                     
                   <Switch>
                        <Route  exact path="/admin" component={Dashboard} />
                        <Route exact path="/admin/user" component={User} />
                        <Route exact path="/admin/user/add" component={AddUser} />
                    </Switch>
                      
                </div>   
            
            </React.Fragment>
        )
    }
}
export default Panel