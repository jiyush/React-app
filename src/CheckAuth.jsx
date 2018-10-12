import React, { Component } from 'react';
class CheckAuth extends Component {
    constructor(props){
        super(props);
        this.isLogin = this.isLogin.bind(this)
    }
    isLogin(){

        let token = localStorage.getItem('token');
        if(!token){
            return false;
        }
        return true;
        // var payload = JSON.stringify(data);
        // var config = {
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json',
        //         'Access-Control-Allow-Origin': 'http://localhost/react-demo/server/public'
        //     }
        // }
    }
}
export default CheckAuth