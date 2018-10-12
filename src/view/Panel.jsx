import React, { Component } from 'react';
import  Navbar  from "./Navbar";
import  Sidebar  from "./Sidebar";
import { isLogin } from "./CheckAuth";
import {
    Route,
    Switch
} from "react-router-dom"
import Dashboard from "./Dashboard"
import User from "./User"
import AddUser from "./AddUser"
class Panel extends Component {
    
    componentWillMount(){
        let token = localStorage.getItem('token');
        
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
                        <Route path="/admin/user" component={User} />
                        <Route path="/admin/user/add" component={AddUser} />
                    </Switch>
                      
                </div>   
            
            </React.Fragment>
        )
    }
}
export default Panel