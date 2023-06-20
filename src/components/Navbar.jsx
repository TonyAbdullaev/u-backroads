import React from 'react';
import logo from '../assets/images/logo.svg'
import {pageLinks, socialMediaLinks} from "../data";
import NavLinks from "./NavLinks";
import IconLists from "./IconLists";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-center">
                <div className="nav-header">
                    <img src={logo} className="nav-logo" alt="backroads"/>
                    <button type="button" className="nav-toggle" id="nav-toggle">
                        <i className="fas fa-bars"></i>
                    </button>
                </div>
                <NavLinks id="nav-links" classname="nav-links" data={pageLinks} isFooter={false} />
                <IconLists classname="nav-icons" data={socialMediaLinks} />
            </div>
        </nav>
    );
};

export default Navbar;