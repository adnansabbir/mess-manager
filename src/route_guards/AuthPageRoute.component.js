import React from "react";
import {Redirect, Route} from "react-router-dom";
import {APP_ROUTES} from './App.routes';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCurrentUser} from "../redux/user/user.selector";

const AuthPageRoute = ({component: Component, currentUser, ...rest}) => {
    return (
        <Route {...rest} render={(props) => (
            currentUser ? <Redirect to={APP_ROUTES.LANDING_PAGE}/> : <Component {...props}/>
        )}/>
    )
};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(AuthPageRoute);