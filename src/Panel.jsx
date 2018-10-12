import React, { Component } from 'react';
import  Navbar  from "./Navbar";
import  Sidebar  from "./Sidebar";
import Auth from "./CheckAuth";
import {
    Route,
    Switch
} from "react-router-dom"
import Dashboard from "./Dashboard"
import User from "./User"

class Panel extends Component {
    
    componentWillMount(){
        if(!Auth.isLogin){
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
                        <Route path="/admin/user" component={User} />
                    </Switch>
                      
                </div>   
            
            </React.Fragment>
        )
    }
}
export default Panel