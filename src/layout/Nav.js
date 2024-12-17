import React from "react";
import { Link } from "react-router-dom";
import classes from "./Nav.module.css";
import Logo from "../images/logo.svg";


function Nav() {
    return (
        <header className={classes.header}>
            <img src={Logo}></img>
            <nav>
                <ul>
                    <li>
                        <Link to="/services">Services</Link>
                    </li>
                    <li>
                        <Link to="/">Products</Link>
                    </li>
                    <li>
                        <Link to="/portfolio">Portfolio</Link>
                    </li>
                    <li>
                        <Link to="/faq">FAQ</Link>
                    </li>
                    <li>
                        <Link to="/contacts">Contacts</Link>
                    </li>
                    <li>
                        <Link to="/about_us">About_us</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav; 
