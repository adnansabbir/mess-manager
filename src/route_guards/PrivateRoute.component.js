import React from "react";
import {Redirect, Route} from "react-router-dom";
import {APP_ROUTES} from './App.routes';

const isAuthenticated = false;
const PrivateRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={(props) => (
        isAuthenticated ? <Component/> : <Redirect to={APP_ROUTES.AUTH}/>
    )}/>
);

export default PrivateRoute;