import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {auth, createOrGetUser} from "./firebase/firebase.utils";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {PrivateRoute, AuthPageRoute} from './route_guards/AppRouteGuards.route';
import {APP_ROUTES} from './route_guards/App.routes';
import {selectAuthStateFetched, selectCurrentUser} from "./redux/user/user.selector";
import {setAuthStateFetched, setCurrentUser} from "./redux/user/user.actions";
import AuthPage from "./pages/auth/auth.page";
import LandingPage from "./pages/landing_page/landing_page.page";
import PageNotFound from "./pages/page_not_found/page_not_found.page";

const privatePage = () => (<h1>private</h1>);

class App extends React.Component {
    firebaseAuthUnsubscription;

    componentDidMount() {
        const {setCurrentUser, setAuthStateFetched} = this.props;
        this.firebaseAuthUnsubscription = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createOrGetUser(userAuth);
                userRef.onSnapshot(snapshot => {
                    setCurrentUser({
                        currentUser: {
                            id: snapshot.id,
                            ...snapshot.data()
                        }
                    });
                    setAuthStateFetched()
                })
            } else {
                setCurrentUser(userAuth);
                setAuthStateFetched()
            }
        })
    }

    componentWillUnmount() {
        this.firebaseAuthUnsubscription();
    }

    render() {
        const {authStateFetched} = this.props;
        return (
            authStateFetched ?
                <div className="App">
                    <Switch>
                        <Route exact path={APP_ROUTES.LANDING_PAGE} component={LandingPage}/>
                        <AuthPageRoute path={APP_ROUTES.AUTH} component={AuthPage}/>
                        <PrivateRoute exact path={APP_ROUTES.AUTHENTICATED_PAGE} component={privatePage}/>
                        <Route path='*' exact={true} component={PageNotFound}/>
                    </Switch>
                </div> :
                <div className="App">
                    <Switch>
                        <Route exact path={APP_ROUTES.LANDING_PAGE} component={LandingPage}/>
                        <Route path='*' exact={true} component={PageNotFound}/>
                        <Route path='*' exact={true} render={() => (<div/>)}/>
                    </Switch>
                </div>
        );
    }
}

const mapStateToProps = state => ({
    currentUser: selectCurrentUser(state),
    authStateFetched: selectAuthStateFetched(state)
});

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user)),
    setAuthStateFetched: () => dispatch(setAuthStateFetched())
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
