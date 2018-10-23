import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import axios from 'axios';
import { API_URL } from '../Constant';

class Customer extends Component{
    constructor(props){
        super(props);
        this.state = {
            customers : []
        }
        // this.deleteUser = this.deleteUser.bind(this);
    }
    deleteCustomer = (id) => {
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
            axios.post(`${API_URL}/customer/delete`,payload,config).then(res => { 

                console.log('delete success');  

                if(res.status === 200 && res.statusText === 'OK'){
                    const arrayCopy = this.state.customers.filter((customer) => customer.id !== id);
                    this.setState({customers: arrayCopy});
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
            axios.post(`${API_URL}/customer`, config).then(res => {       
                this.setState({
                    customers: res.data
                })
            });
        
    }

    render() {
        const customerList = this.state.customers;
        return(
            <div id="content-wrapper">
                <div className="container-fluid col-md-12">
                    <div className="card">
                        <div className="card-header">
                        <h3>
                            Customer
                            <NavLink to="/admin/customer/add"  className="btn btn-info float-right" > Add</NavLink>
                        </h3>
                        </div>
                        <div className="card-body">
                        </div>
                        
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Status</th>
                                    <th colSpan="2" >Action</th>
                                </tr>
                            </thead>
                            <tbody>
                            {  
                                customerList.map((customer) => 
                                <tr key={customer._id} >
                                    <td>{ customer.name }</td>
                                    <td>{ customer.email }</td>
                                    <td>{ customer.status }</td>
                                    <td><NavLink to={"/admin/customer/edit/"+customer._id} className="btn btn-info" >Edit</NavLink>
                                    </td>
                                    <td>
                                        <button className="btn btn-danger" onClick={() => this.deleteCustomer(customer._id)} >Delete</button>
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
export default Customer