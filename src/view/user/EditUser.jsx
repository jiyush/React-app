import React, { Component } from 'react';
// import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../Constant';


class EditUser extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            id: '',
            email: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentWillMount(){
        let token = localStorage.getItem('token');
        const data = {
            name: this.state.name,
            email: this.state.email,
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
        axios.post(`${API_URL}/user/edit/${this.props.match.params.id
        }`, payload, config).then(res => {
           if(res.status === 200 && res.statusText === 'OK'){
            
            this.setState({
                id: res.data.editData.id,
                name: res.data.editData.name,
                email: res.data.editData.email
            });

           }else{
               console.log('error in fetching data');
           } 
        });

    }
    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    }
    handleSubmit(e) {
        e.preventDefault();
        let token = localStorage.getItem('token');
        const data = {
            id: this.state.id,
            name: this.state.name,
            email: this.state.email,
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
        axios.post(`${API_URL}/user/update`, payload, config).then(res => {
           if(res.status === 200 && res.statusText === 'OK'){
            this.props.history.push('/admin/user');
           }else{
               console.log('error in update user');
           } 
        });
        
    }
    render(){
        const { name, email } = this.state;
        return(
            <div id="content-wrapper">
                <div className="container-fluid">
                    <div className="card">
                        <div className="card-header">
                        <h3>
                          Edit User
                           
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
                            {/* <NavLink className="btn btn-primary btn-block" to="/admin">Login</NavLink> */}
                            <button className="btn btn-primary btn-block">Update</button>
                        </form>
                        </div>
                    </div>
                
            </div>
        </div>
        );
    }
}
export default  EditUser