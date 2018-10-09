import React, { Component } from 'react';
import {  NavLink } from 'react-router-dom';

class Dashboard extends Component{
    render(){
        return(
            <div id="content-wrapper">
                <div className="container-fluid">
                    <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                    <NavLink to="/admin">Dashboard</NavLink>
                    </li>
                    <li className="breadcrumb-item active">Overview</li>
                    </ol>
                </div>
            </div>
        );
    }
}
export default Dashboard