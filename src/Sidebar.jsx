import React, { Component } from 'react';
import {  NavLink } from 'react-router-dom';

class Sidebar extends Component {
    render(){
        return(
        <ul className="sidebar navbar-nav">
            <li className="nav-item active">
            <NavLink className="nav-link" to="/admin">
                <i className="fas fa-fw fa-tachometer-alt"></i>
                <span>Dashboard</span>
            </NavLink>
            </li>
            <li className="nav-item active">
            <NavLink className="nav-link" to="/admin/user" >
                <i className="fas fa-fw fa-user">
                </i>
                <span>User Management</span>
            </NavLink>
            </li>
        </ul>
        );
    }
}
export default Sidebar