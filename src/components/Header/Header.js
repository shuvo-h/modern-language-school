import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './header.css';
import logo from '../../images/logo.png';

const Header = () => {
    return (
        <header>
            {/* navbar start  */}
            <Navbar fixed="top" bg="dark" variant={"dark"} expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to={"/home"}> <img className="header-logo" src={logo} alt="" /> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to={"/home"}>Home</Nav.Link>
                        <Nav.Link as={Link} to={"/services"}>Services</Nav.Link>
                        <Nav.Link as={Link} to={"/alumni"}>Alumni</Nav.Link>
                        <Nav.Link as={Link} to={"/about"}>About us</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
                {/* School name  */}
            <h1 className="title p-2 rounded">Institute of Modern Language School</h1>
            
        </header>
    );
};

export default Header;