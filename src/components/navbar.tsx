import * as React from "react";
import logo from '../assets/monogram_greenOnWhite.png';
import './navbar.css';
import '../global.css';

function Navbar() {
    return (
        <div className="navbar-wrapper">
            <nav className="navbar-body">
                <a href="#home" className="logo-link">
                    <img src={logo} alt="logo" />
                </a>
                <a href="#rsvp" className="link">RSVP</a>
                <a href="#info" className="link">INFO</a>
                <a href="#registry" className="link">REGISTRY</a>
                <a href="#photos" className="link">PHOTOS</a>
            </nav>
        </div>
    );
}

export default Navbar;