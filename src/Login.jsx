import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import axios from 'axios';

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    //  this.setUsername = this.setUsername.bind(this);
     this.handleChange = this.handleChange.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);   
    }
    // setUsername = (value) => {
    //   this.setState({value})  
    // }
    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    }
    
    handleSubmit(e) {
        e.preventDefault();
        const data = {
            email: this.state.email,
            password: this.state.password
        }
        const requestOptions = {
            method: 'POST',
            headers: { 'Accept': 'application/json','Content-Type': 'application/json' , 'Access-Control-Allow-Origin': '*',},
            body: JSON.stringify({ data })
        };
        
        return fetch('http://localhost/react-demo/server/public/api/login',requestOptions).then(res => {
            console.log(res);
        });
        // axios.post('http://localhost/react-demo/server/public/api/login',{ data }).then(res => {
        //     console.log(res);
        // })
        
    }
    render() {
        const { email, password } = this.state;
        return(
            <div className="container">
                <div className="card card-login mx-auto mt-5">
                <div className="card-header">Login</div>
                    <div className="card-body">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <div className="form-label-group">
                                <input type="email" id="inputEmail" value={email}  onChange={this.handleChange('email')}   className="form-control" />
                                <label htmlFor="inputEmail">Email address</label>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="form-label-group">
                                <input type="password" id="inputPassword" value={password} onChange={this.handleChange('password')} className="form-control" placeholder="Password" />
                                <label htmlFor="inputPassword">Password</label>
                            </div>
                        </div>
                        {/* <NavLink className="btn btn-primary btn-block" to="/admin">Login</NavLink> */}
                        <button className="btn btn-primary btn-block" >Login</button>
                    </form>
                    <div className="text-center">
                        <a className="d-block small mt-3" href="register.html">Register an Account</a>
                        <a className="d-block small" href="forgot-password.html">Forgot Password?</a>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Login