import React from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import Panel from './view/layout/Panel';
 const AppRouter = () => {
     <BrowserRouter>
        <Switch>
            <Route exact={true} path="/" component={Login} />
            <Route exact={true} path="/admin" component={Panel} />
            <Route exact={true} path="/admin/user" component={User} />
            <Route exact={true} path="/admin/user/add" component={AddUser} />
            <Route component={PageNotFound} />
        </Switch>
     </BrowserRouter>
 }
 export default AppRouter