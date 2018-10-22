import React, { Component } from 'react';
import  Navbar  from "./Navbar";
import  Sidebar  from "./Sidebar";
import { isAuthenticated } from "../auth/CheckAuth";
import {
    Route,
    Switch, NavLink, Redirect
} from "react-router-dom"
import axios from 'axios';
import { API_URL } from '../Constant'
import Dashboard from "../dashboard/Dashboard"
import User from "../user/User"
import AddUser from "../user/AddUser.jsx"
import EditUser from "../user/EditUser.jsx"
class Panel extends Component {
    
    constructor(props){
        super(props);

    }


    componentWillMount(){
        let token = localStorage.getItem('token');
        if(token != null){
            const data = {
                token: token
            }
            var payload = JSON.stringify(data);
            var config = {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': 'http://localhost/react-demo/server/public',
                    'Authorization': 'Bearer '+ token
                }
            }
            axios.post(`${API_URL}/validatetoken`, payload, config).then(res => {       
                
            if(res.status === 200 && res.statusText === 'OK'){
                    console.log('login');
            }else{
                localStorage.removeItem('token');
                this.props.history.push('/');
            }
            });

        }else{
            this.props.history.push('/');
        }
        
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