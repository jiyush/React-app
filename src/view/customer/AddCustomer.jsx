import React, { Component } from 'react';
// import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../Constant';


class AddCustomer extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            status: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeCheckBox = this.handleChangeCheckBox.bind(this);
    }
    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    }
    handleChangeCheckBox(event){
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        if(value){
            this.setState({
                status: "1"
            })
        }else{
            this.setState({
                status: "0"
            })
        }
        
    }
    handleSubmit(e) {
        e.preventDefault();
        let token = localStorage.getItem('token');
        const data = {
            name: this.state.name,
            email: this.state.email,
            status: this.state.status,
            createdBy: "1",
            updatedBy: "1"
        }
        console.log(data);
        var payload = JSON.stringify(data);
        var config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': `${API_URL}/`
            }
        }
        axios.post(`${API_URL}/customer/create`, payload, config).then(res => {
           if(res.status === 200 && res.statusText === 'OK'){
            this.props.history.push('/admin/customer');
           }else{
               console.log('error in add new customer');
           } 
        });
        
    }
    render(){
        const { name, email, status } = this.state
        return(
            <div id="content-wrapper">
                <div className="container-fluid col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <h3>
                            Add  Customer 
                            </h3>
                        </div>
                        <div className="card-body">
                        <form onSubmit={this.handleSubmit} className="col-md-6">
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
                                    <input type="checkbox" id="status" value={status} onChange={this.handleChangeCheckBox} className="form-control" />
                                    <label htmlFor="status">Status</label>
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
export default  AddCustomer