import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom'
import AddUser from "./AddUser"
import axios from 'axios';

class User extends Component{
    constructor(props){
        super(props);
        this.state = {
            users : null
        }
    }

    componentDidMount(){
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
            axios.post('http://localhost/react-demo/server/public/api/user', payload, config).then(res => {       
                   
            if(res.status === 200 && res.statusText === 'OK'){
                   console.log(res.data.users); 
                   this.setState({
                        users: res.data.users.map((user) => 
                        <tr key={user.id} >
                            <td>{ user.name }</td>
                            <td>{ user.email }</td>
                        </tr>
                        )
                   });
                //    this.state.users = res.data.users.map((user) => 
                //        <tr key={user.id} >
                //            <td  >{ user.name }</td>
                //            <td >{ user.email }</td>
                //        </tr>
                //    );
                   
                    return true;    
               }else{
                   localStorage.removeItem('token');
                   return false;
               }
            });
    
        }
    }

    render() {
        const User = this.Userlist;
        return(
            <div id="content-wrapper">
                <div className="container-fluid">
                    <div className="card">
                        <div className="card-header">
                        <h3>
                            User
                            <NavLink to="/admin/user/add"  className="btn btn-info float-right" > Add</NavLink>
                        </h3>
                        </div>
                        <div className="card-body">
                        </div>
                        
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                </tr>
                            </thead>
                            <tbody>
                            { this.state.users }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            
        );
    }
}
export default User