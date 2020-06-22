import React from "react";
import {Switch, Route, Redirect} from 'react-router-dom';
import {AUTH_ROUTES} from "./auth.routes";
import SignInSide from "../../components/SignIn/SignIn.component";

const AuthPage = ({match, ...rest}) => {
    return (
        <div className="auth-page">
            <Switch>
                <Route path={`${match.path}${AUTH_ROUTES.SIGN_IN}`} component={SignInSide}/>
                <Redirect from={match.path} to={`${match.path}${AUTH_ROUTES.SIGN_IN}`}/>
            </Switch>
        </div>
    )
};

export default AuthPage;