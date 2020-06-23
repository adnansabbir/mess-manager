import React from "react";
import AuthStyleClasses from "./auth.style";
import {Switch, Route, Redirect, BrowserRouter} from 'react-router-dom';
import SignIn from "../../components/auth/sign-in/sign-in.component";
import {AUTH_ROUTES} from "../../routes/App.routes";
import SignUp from "../../components/auth/sign-up/sign-up.component";

const AuthPage = ({match, ...rest}) => {
    const Classes = AuthStyleClasses();
    return (
        <div className={`${Classes.root} ${Classes.bgImage}`}>
            <Switch>
                <Route path={`${AUTH_ROUTES.SIGN_IN}`} component={SignIn}/>
                <Route path={`${AUTH_ROUTES.SIGN_UP}`} component={SignUp}/>
                <Redirect from={match.path} to={`${AUTH_ROUTES.SIGN_IN}`}/>
            </Switch>
        </div>
    )
};

export default AuthPage;