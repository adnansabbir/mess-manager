import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {auth, createOrGetUser} from "./firebase/firebase.utils";
import './App.css';
import {PrivateRoute, AuthPageRoute} from './route_guards/AppRouteGuards.route';
import {APP_ROUTES} from './route_guards/App.routes';
import SignInSide from "./components/SignIn/SignIn.component";
import {selectCurrentUser} from "./redux/user/user.selector";
import {setCurrentUser} from "./redux/user/user.actions";

const publicPage = () => (<h1>Public</h1>);
const privatePage = () => (<h1>private</h1>);
const pageNotFound = () => (<h1>404 Page not Found</h1>);

class App extends React.Component {
    firebaseAuthUnsubscription;

    componentDidMount() {
        const {setCurrentUser} = this.props;
        this.firebaseAuthUnsubscription = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                console.log(userAuth);
                const userRef = await createOrGetUser(userAuth);
                userRef.onSnapshot(snapshot => {
                    setCurrentUser({
                        currentUser: {
                            id: snapshot.id,
                            ...snapshot.data()
                        }
                    })
                })
            } else {
                setCurrentUser(userAuth)
            }
        })
    }

    render() {
        return (
            <div className="App">
                <Switch>
                    <Route exact path={APP_ROUTES.LANDING_PAGE} component={publicPage}/>
                    <AuthPageRoute exact path={APP_ROUTES.AUTH} component={SignInSide}/>
                    <PrivateRoute exact path={APP_ROUTES.AUTHENTICATED_PAGE} component={privatePage}/>
                    <Route path='*' exact={true} component={pageNotFound}/>
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    currentUser: selectCurrentUser(state)
});

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
