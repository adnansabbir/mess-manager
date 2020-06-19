import React from "react";
import {Redirect, Route} from "react-router-dom";
import {APP_ROUTES} from './App.routes';

const isAuthenticated = true;
const AuthPageRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={(props) => (
        isAuthenticated ? <Redirect to={APP_ROUTES.LANDING_PAGE}/> : <Component/>
    )}/>
);

export default AuthPageRoute;