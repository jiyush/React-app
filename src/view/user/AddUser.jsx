import React, { Component } from 'react';
// import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../Constant';


class AddUser extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            c_password: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    }
    handleSubmit(e) {
        e.preventDefault();
        let token = localStorage.getItem('token');
        const data = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            c_password: this.state.c_password
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
        axios.post(`${API_URL}/user/add`, payload, config).then(res => {
           if(res.status === 200 && res.statusText === 'OK'){
            //    localStorage.setItem('token',res.data.success.token);
            //     console.log('Login...!');
            this.props.history.push('/admin/user');
            console.log(res);

           }else{
               console.log('error in add new user');
           } 
        });
        
    }
    render(){
        const { name, email, password, c_password } = this.state
        return(
            <div id="content-wrapper">
                <div className="container-fluid col-md-12">
                    <div className="card">
                        <div className="card-header">
                        <h3>
                          Add  User
                           
                        </h3>
                        </div>
                        <div className="card-body">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <div className="form-label-group">
                                    <input type="text" id="name" value={name} placeholder="Name"  onChange={this.handleChange('name')}   className="form-control" />
                                    <label htmlFor="name">Name</label>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="form-label-group">
                                    <input type="email" id="inputEmail" value={email} placeholder="Email"  onChange={this.handleChange('email')}   className="form-control" />
                                    <label htmlFor="inputEmail">Email address</label>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="form-label-group">
                                    <input type="password" id="inputPassword" value={password} onChange={this.handleChange('password')} className="form-control" placeholder="Password" />
                                    <label htmlFor="inputPassword">Password</label>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="form-label-group">
                                    <input type="password" id="com_password" value={c_password} onChange={this.handleChange('c_password')} className="form-control" placeholder="Confirm Password" />
                                    <label htmlFor="com_password">Confirm Password</label>
                                </div>
                            </div>
                            {/* <NavLink className="btn btn-primary btn-block" to="/admin">Login</NavLink> */}
                            <button className="btn btn-primary btn-block" >Add</button>
                        </form>
                        </div>
                    </div>
                
            </div>
        </div>
        );
    }
}
export default  AddUser