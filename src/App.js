import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {auth, createOrGetUser} from "./firebase/firebase.utils";
import './App.css';
import {PrivateRoute, AuthPageRoute} from './route_guards/AppRouteGuards.route';
import {APP_ROUTES} from './route_guards/App.routes';
import {selectAuthStateFetched, selectCurrentUser} from "./redux/user/user.selector";
import {setAuthStateFetched, setCurrentUser} from "./redux/user/user.actions";
import AuthPage from "./pages/auth/auth.page";

const publicPage = () => (<Link to='/'>Public</Link>);
const privatePage = () => (<h1>private</h1>);
const pageNotFound = () => (<h1>404 Page not Found</h1>);

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
                    <Route exact path={APP_ROUTES.LANDING_PAGE} component={publicPage}/>
                    <AuthPageRoute path={APP_ROUTES.AUTH} component={AuthPage}/>
                    <PrivateRoute exact path={APP_ROUTES.AUTHENTICATED_PAGE} component={privatePage}/>
                    <Route path='*' exact={true} component={pageNotFound}/>
                </Switch>
            </div> : <div/>
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
