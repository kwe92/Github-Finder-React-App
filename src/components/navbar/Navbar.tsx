import React from "react";
import * as styles from "./NavbarStyles"

const Navbar = (props:{}) => {

    const Wrapper1 = styles.LogoIconContentWrapper;

    const links = {
        home: <li><styles.Link to ="/">Home</styles.Link></li>,
        about: <li><styles.Link to ="about">About</styles.Link></li>,
    };

    const hamburgerMenu = 
        <styles.HamburgerMenu>&#9776;</styles.HamburgerMenu>;

    const iconLogo = 
        <Wrapper1> 
            <styles.GithubIcon/>
            <styles.Logo>
            Github Finder
            </styles.Logo>
        </Wrapper1>;

    const navLinks = 
        <styles.UlNavLinks>
            {links['home']}
            {links['about']}
        </styles.UlNavLinks>;

    return(
        <styles.Navbar>
            {iconLogo}
            {navLinks}
            {hamburgerMenu}
        </styles.Navbar>
        );
    };

export default Navbar;