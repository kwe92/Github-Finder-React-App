import React from "react";
import * as styles from "./NavbarStyles"

const Navbar = (props:{})=>{
    const links = {
        home: <li><styles.StyledLink to ="/">Home</styles.StyledLink></li>,
        about: <li><styles.StyledLink to ="/">About</styles.StyledLink></li>

    }

    const hamburgerMenu = <styles.StyledHamburgerMenu>&#9776;</styles.StyledHamburgerMenu>;

    return(
        // remove inline style
        <styles.StyledNavbar>
        
            <div style={{display: "flex", gap:"1rem", paddingLeft: "1.5rem"}}>
                {/* ICON */}
            <styles.StyledGithubIcon/>
            {/* LOGO */}
            <styles.Logo>
                Github Finder
            </styles.Logo>
            </div>

            {/* NAVLINKS START */}

            <styles.StyledUlNavLinks>

                    {links['home']}
                    {links['about']}

            </styles.StyledUlNavLinks>

            {/* NAVLINKS END */}

            {/* HAMBURGER MENU */}
            {hamburgerMenu}
        </styles.StyledNavbar>
    )
};

export default Navbar;