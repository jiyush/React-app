import React, { Component } from 'react';
import  Navbar  from "./Navbar";
import  Sidebar  from "./Sidebar";
// import { isAuthenticated } from "../auth/CheckAuth";
import {
    Route,
    Switch, NavLink, Redirect
} from "react-router-dom"
import Dashboard from "../dashboard/Dashboard"
import User from "../user/User"
import AddUser from "../user/AddUser.jsx"
import EditUser from "../user/EditUser.jsx"
class Panel extends Component {
    
    constructor(props){
        super(props);

    }


    componentWillMount(){
        // isAuthenticated = true;
        // if(isAuthenticated === false){
        //     this.props.history.push('/');
        //     <Redirect to="/"  />
        // }
        
        
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
                        <Route exact path="/admin/user/edit/:id" component={EditUser} />
                    </Switch>
                      
                </div>   
            
            </React.Fragment>
        )
    }
}
export default Panel