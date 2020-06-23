import React from "react";
import {Link} from "react-router-dom";

const LandingPage = () => (
    <div className="landing-page">
        <h1>Landing Page</h1>
        <Link to='/my-account'>My Account</Link>
        <br/>
        <Link to='/auth'>Auth</Link>
    </div>
);

export default LandingPage;