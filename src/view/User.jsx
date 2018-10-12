import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class User extends Component{
    constructor(props){
        super(props);
    }
    
    render() {
        
        return(
            <div id="content-wrapper">
                <div className="container-fluid">
                <div className="card">
                    <div className="card-header">
                    <h3>
                        User
                        <NavLink to="admin/user/add"  className="btn btn-info float-right" > Add</NavLink>
                    </h3>
                    </div>
                    <div className="card-body">
                    </div>
                </div>
                    {/* <table className="table">
                        <thead>
                            <tr>
                                <th>test</th>
                                <th>test</th>
                            </tr>
                        </thead>
                        <tbody>
                           <tr>
                               <td>123</td>
                               <td>123</td>
                           </tr>
                        </tbody>
                    </table> */}
                </div>
            </div>
            
        );
    }
}
export default User