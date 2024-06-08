import React, { useContext, useState } from "react";
import './Navbar.css';
import logo from '../assets/logo.png'

const Navbar = () => {

    return(
        <div className="navbar">
            <div className="nav-logo">
                <img src = {logo} alt = "" />
                <p>ApnaPG</p>
            </div>
            <ul className="nav-menu">
                <li>Home</li>
                <li>About</li>
                <li>Accommodation</li>
                <li>Contact</li>
            </ul>
            <div className="nav-login-cart">
                <button>Login</button>
            </div>
        </div>
    )
}

export default Navbar