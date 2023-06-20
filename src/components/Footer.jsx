import React from 'react';
import {pageLinks, socialMediaLinks} from "../data";
import NavLinks from "./NavLinks";
import IconLists from "./IconLists";

const Footer = () => {
    return (
        <footer className="section footer">
            <NavLinks classname="footer-links" data={pageLinks} isFooter={true} />
            <IconLists classname="footer-icons" data={socialMediaLinks} />
            <p className="copyright">
                copyright &copy; Backroads travel tours company
                <span id="date"></span> all rights reserved
            </p>
        </footer>
    );
};

export default Footer;