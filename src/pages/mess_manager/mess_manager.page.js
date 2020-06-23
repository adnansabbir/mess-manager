import React from "react";
import {Link} from "react-router-dom";
import {auth} from "../../firebase/firebase.utils";

const MessManager = () => (
    <div className="mess-manager-page">
        <h1>Mess Manager</h1>
        <Link to='/'>Home</Link> <br/>
        <span onClick={() => auth.signOut()}>Sign out</span>
    </div>
);

export default MessManager;