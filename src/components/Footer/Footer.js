import React from 'react';
import { BsFacebook, BsTwitter, BsYoutube } from "react-icons/bs";
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div className="bg-dark text-light p-5" >
            <div className="row">
                {/* footer nav  */}
                <div className="col-md-4 col-sm-1 text-center ">
                    <Link className="text-decoration-none" to="/Home"><strong>Home</strong></Link><br />
                    <Link className="text-decoration-none" to="/services"><strong>Services</strong></Link><br />
                    <Link className="text-decoration-none" to="/alumni"><strong>Alumni</strong></Link><br />
                    <Link className="text-decoration-none" to="/about"><strong>About us</strong></Link>
                </div>
                {/* social media link  */}
                <div className="col-md-4 col-sm-1 text-center">
                    <Link to="*"><BsFacebook size={50} className="text-primary m-2 "></BsFacebook></Link>
                    <Link to="*">
                    <BsYoutube  size={50} className="text-danger m-2"></BsYoutube></Link>
                    <Link to="*">
                    <BsTwitter size={50} className="text-primary m-2"></BsTwitter></Link>
                </div>
                {/* school's address  */}
                <div className="col-md-4 col-sm-1 text-end">
                    <p>
                        <strong>Institute of Modern Language School</strong> <br />
                        2059 White Oak Drive, <br /> 
                        Cameron-64429, Missouri, United States <br />
                        Phone: <i>816-632-8479</i> <br />
                        Email: <i>imls.principal@imls.edu.com</i></p>
                </div>
            </div>
            <p className="text-center"><small>&copy;Copyright 2021. All rights reserved.</small></p>
        </div>
    );
};

export default Footer;
