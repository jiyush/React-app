import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom'
import AddUser from "./AddUser"
import axios from 'axios';
import { API_URL } from '../Constant';

class User extends Component{
    constructor(props){
        super(props);
        this.state = {
            users : null
        }
        // this.deleteUser = this.deleteUser.bind(this);
    }
    deleteUser = (id) => {
            let token = localStorage.getItem('token');
            const data = {
                id: id
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
            axios.post(`${API_URL}/user/delete`,payload,config).then(res => {
                if(res.status === 200 && res.statusText === 'OK'){
                    // this.props.history.push('/admin/user');
                    this.forceUpdate();
                    console.log(res.data.message);     
                   }else{
                       return false;
                   }
            });
        
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
            axios.post(`${API_URL}/user`, payload, config).then(res => {       
                   
            if(res.status === 200 && res.statusText === 'OK'){
                console.log(res.data.users); 
                this.setState({
                    users: res.data.users.map((user) => 
                    <tr key={user.id} >
                        <td>{ user.name }</td>
                        <td>{ user.email }</td>
                        <td><NavLink to={"/admin/user/edit/"+user.id} className="btn btn-info" >Edit</NavLink>
                        </td>
                        <td>
                            <button className="btn btn-danger" onClick={() => this.deleteUser(user.id)} >Delete</button>
                        </td>
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
                <div className="container-fluid col-md-12">
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
                                    <th colSpan="2" >Action</th>
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