import React from 'react';
import { BsFacebook, BsTwitter, BsYoutube } from "react-icons/bs";
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div className="bg-dark text-light p-5" >
            <div className="row">
                <div className="col-sm">
                    <Link to="/Home">Home</Link><br />
                    <Link to="/services">Services</Link><br />
                    <Link to="/alumni">Alumni</Link><br />
                    <Link to="/about">About us</Link>
                </div>
                <div className="col-sm">
                    <Link to="*"><BsFacebook className="text-primary m-2"></BsFacebook></Link>
                    <Link to="*">
                    <BsYoutube  className="text-danger m-2"></BsYoutube></Link>
                    <Link to="*">
                    <BsTwitter  className="text-primary m-2"></BsTwitter></Link>
                </div>
            </div>
            <p className="text-center"><small>&copy;Copyright 2021. All rights reserved.</small></p>
        </div>
    );
};

export default Footer;
