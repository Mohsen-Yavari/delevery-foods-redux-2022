import React from 'react';
import {Link} from 'react-router-dom';
import logo from "../../assets/images/res-logo.png";

const Footer = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-6 col-md-4 col-lg-3">
                    <Link to="/" className="navbar-brand" > 
                    <img src={logo} alt="" className="logo" />
                    <p className="logoName">غذای محسن</p>
                    </Link>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3">

                </div>
                <div className="col-sm-6 col-md-4 col-lg-3">

                </div>
                <div className="col-sm-6 col-md-4 col-lg-3">

                </div>
            </div>
        </div>
    );
};

export default Footer;