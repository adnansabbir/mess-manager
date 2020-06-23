import React from "react";
import {Redirect, Route} from "react-router-dom";
import {APP_ROUTES} from './App.routes';
import {createStructuredSelector} from "reselect";
import {selectCurrentUser} from "../redux/user/user.selector";
import {connect} from "react-redux";

const PrivateRoute = ({component: Component, currentUser, ...rest}) => (
    <Route {...rest} render={(props) => (
        currentUser ? <Component {...props}/> : <Redirect to={APP_ROUTES.AUTH}/>
    )}/>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(PrivateRoute);