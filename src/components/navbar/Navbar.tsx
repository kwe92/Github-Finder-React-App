import React, {ReactNode, FunctionComponent, MouseEventHandler} from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import {Link, Navbar as StyledNavbar, Logo, GithubIcon, UlNavLinks, HamburgerMenuContainer, HamburgerMenu as HBM, LogoIconContentWrapper, StyledDropdown} from "./NavbarStyles"

const Navbar: FunctionComponent = (props:{}): JSX.Element => 
       {

        const navigate: NavigateFunction = useNavigate();

        const toHome = () => {
            navigate("/");
        };
        return (
                <StyledNavbar>
                    <IconLogo onClick={toHome}/>
                    <NavLinks/>
                    <HamburgerMenuContainer>
                        <HamburgerMenu/>
                        <StyledDropdown>
                            <Home/>
                            <About/>
                        </StyledDropdown>
                    </HamburgerMenuContainer>
                </StyledNavbar>
        );
       };
   
    const Wrapper1 = (props:{children?: ReactNode, onClick: Function}) => 
        <LogoIconContentWrapper onClick={() => {props.onClick()}}>{props.children}</LogoIconContentWrapper>;

    const Home = (props:{}) => 
        <li><Link to ="/">Home</Link></li>;

    const About = (props:{}) => 
        <li><Link to ="about">About</Link></li>;

    const HamburgerMenu = (props:{}) => 
        <HBM>&#9776;</HBM>;

    const IconLogo = (props: {onClick: Function}) =>
        <Wrapper1 onClick={props.onClick}> 
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