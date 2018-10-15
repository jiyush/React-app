import axios from 'axios';
export function isLogin(){
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
        axios.post('http://localhost/react-demo/server/public/api/validatetoken', payload, config).then(res => {       
               
        if(res.status === 200 && res.statusText === 'OK'){
                
                return true;    
           }else{
               localStorage.removeItem('token');
               return false;
           }
        });

    }else{
        return false;
    }
}
export default isLogin