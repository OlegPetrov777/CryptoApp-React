import React from "react";
import {Nav, Navbar} from "react-bootstrap";
import style from './Header.module.css'
import "bootstrap/dist/css/bootstrap.min.css";
import {NavLink} from "react-router-dom";


let Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/">
                CryptoApp
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <NavLink className={style.navLink} to={'/market'}>Маркет</NavLink>
                    <NavLink className={style.navLink} to={'/profile'}>Портфель</NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>);
}

export default Header;
