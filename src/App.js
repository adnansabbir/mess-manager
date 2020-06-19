import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import {PrivateRoute, AuthPageRoute} from './route_guards/AppRouteGuards.route';
import {APP_ROUTES} from './route_guards/App.routes';

const loginPage = () => (<h1>Login</h1>);
const publicPage = () => (<h1>Public</h1>);
const privatePage = () => (<h1>private</h1>);
const pageNotFound = () => (<h1>404 Page not Found</h1>);

function App() {
    return (
        <div className="App">
            <Switch>
                <Route exact path={APP_ROUTES.LANDING_PAGE} component={publicPage}/>
                <AuthPageRoute exact path={APP_ROUTES.AUTH} component={loginPage}/>
                <PrivateRoute exact path={APP_ROUTES.AUTHENTICATED_PAGE} component={privatePage}/>
                <Route path='*' exact={true} component={pageNotFound}/>
            </Switch>
        </div>
    );
}

export default App;
