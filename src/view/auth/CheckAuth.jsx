import axios from 'axios';
import { API_URL } from '../Constant';
import React from 'react';
    
const isAuthenticated = () => {
    let token = localStorage.getItem('token');
    if(token != null){
        const data = {
            token: token
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
        axios.post(`${API_URL}/validatetoken`, payload, config).then(res => {       
               
        if(res.status === 200 && res.statusText === 'OK'){
                isAuthenticated = true;   
           }else{
               localStorage.removeItem('token');
               isAuthenticated =  false;
           }
        });

    }else{
        isAuthenticated = false;
    }
}
    
export default isAuthenticated