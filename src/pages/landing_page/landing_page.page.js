import React from "react";
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import {showToastMessage} from "../../redux/toast-message/toast-message.action";

const LandingPage = ({showToastMessage, showQuickMessage}) => {
    showToastMessage({message: 'From redux', type: 'info'});
    return (
        <div className="landing-page">
            <h1>Landing Page</h1>
            <Link to='/my-account'>My Account</Link>
            <br/>
            <Link to='/auth'>Auth</Link>
            <br/>
            <button onClick={() => showQuickMessage('From redux')}>Default</button>
            <br/>
            <button onClick={() => showToastMessage({message: 'From redux', type: 'success'})}>Success</button>
            <br/>
            <button onClick={() => showToastMessage({message: 'From redux', type: 'warning'})}>warning</button>
            <br/>
            <button onClick={() => showToastMessage({message: 'From redux', type: 'error'})}>error</button>
            <br/>
            <button onClick={() => showToastMessage({message: 'From redux', type: 'info'})}>info</button>
            <br/>
            <button onClick={() => showToastMessage({message: 'From redux', type: 'dark'})}>dark</button>
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    showQuickMessage: (message) => dispatch(showToastMessage({message})),
    showToastMessage: (data) => dispatch(showToastMessage(data))
});
export default connect(null, mapDispatchToProps)(LandingPage);