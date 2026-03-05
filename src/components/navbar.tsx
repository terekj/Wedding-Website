import * as React from "react";
import logo from '../assets/monogram_greenOnWhite.png';
import './navbar.css';
import '../global.css';

import { SlMenu, SlClose, SlCalender, SlInfo, SlPresent, SlPicture } from 'react-icons/sl';

function Navbar() {
    const [isVisible, setVisible] = React.useState(false);

    return (
        <>
            <div className={`navbar-icon ${isVisible ? "hidden" : ""}`} onClick={() => setVisible(true)}>
                <button type="button"><SlMenu/></button>
            </div>
            <nav className={`navbar-body ${isVisible ? "" : "hidden"}`}>
                <SlClose className="navbar-close" onClick={() => setVisible(false)} />
                <a href="#home" className="logo-link centering">
                    <img src={logo} alt="logo" />
                </a>
                <a href="#info" className="link"><SlInfo /> INFO</a>
                <a href="#registry" className="link"><SlPresent /> REGISTRY</a>
                <a href="#photos" className="link"><SlPicture /> PHOTOS</a>
            </nav>
        </>
    );
}

export default Navbar;
