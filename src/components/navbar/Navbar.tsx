import React, {ReactNode} from "react";
import {Link, Navbar as StyledNavbar, Logo, GithubIcon, UlNavLinks, HamburgerMenuContainer, HamburgerMenu as HBM, LogoIconContentWrapper, StyledDropdown} from "./NavbarStyles"

const Navbar = (props:{}) => 
        <StyledNavbar>
            <IconLogo/>
            <NavLinks/>
            <HamburgerMenuContainer>
                <HamburgerMenu/>
                <StyledDropdown>
                    <Home/>
                    <About/>
                </StyledDropdown>
        </HamburgerMenuContainer>
        </StyledNavbar>;
   
    const Wrapper1 = (props:{children?: ReactNode}) => 
        <LogoIconContentWrapper>{props.children}</LogoIconContentWrapper>;

    const Home = (props:{}) => 
        <li><Link to ="/">Home</Link></li>;

    const About = (props:{}) => 
        <li><Link to ="about">About</Link></li>;

    const HamburgerMenu = (props:{}) => 
        <HBM>&#9776;</HBM>;

    const IconLogo = (props:{}) =>
        <Wrapper1> 
            <GithubIcon/>
            <Logo>
                Github Finder
            </Logo>
        </Wrapper1>;

    const NavLinks = (props:{}) =>
        <UlNavLinks>
            <Home/>
            <About/>
        </UlNavLinks>;


export default Navbar;