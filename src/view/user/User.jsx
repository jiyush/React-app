import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import axios from 'axios';
import { API_URL } from '../Constant';

class User extends Component{
    constructor(props){
        super(props);
        this.state = {
            users : []
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

                console.log('delete success');  

                if(res.status === 200 && res.statusText === 'OK'){
                    const arrayCopy = this.state.users.filter((user) => user.id !== id);
                    this.setState({users: arrayCopy});
                   }else{
                       localStorage.removeItem('token');
                       return false;
                   }
            });
        
    }
    componentWillMount(){
        let token = localStorage.getItem('token');
            const data = {
                token: token
            }
            var payload = JSON.stringify(data);
            var config = {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Access-control-Allow-origin-Method': '*',
                    'Access-Control-Allow-Origin': `${API_URL}/`  
                }
            }
            axios.get(`${API_URL}/user`, config).then(res => {       
                this.setState({
                    users: res.data
                })
            });
        
    }

    render() {
        const userList = this.state.users;
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
                                    <th>Email</th>
                                    <th colSpan="2" >Action</th>
                                </tr>
                            </thead>
                            <tbody>
                            {  
                                userList.map((user) => 
                                <tr key={user._id} >
                                    <td>{ user.email }</td>
                                    <td><NavLink to={"/admin/user/edit/"+user.id} className="btn btn-info" >Edit</NavLink>
                                    </td>
                                    <td>
                                        <button className="btn btn-danger" onClick={() => this.deleteUser(user.id)} >Delete</button>
                                    </td>
                                </tr>
                                )
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            
        );
    }
}
export default User