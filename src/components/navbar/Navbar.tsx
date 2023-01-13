import React, {ReactNode, FunctionComponent, MouseEventHandler} from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import {Link, Navbar as StyledNavbar, Logo, GithubIcon, UlNavLinks, HamburgerMenuContainer, HamburgerMenu as HBM, LogoIconContentWrapper, StyledDropdown} from "./NavbarStyles"

// TODO: Fix Link && About
// TODO: Clean up all the arrow functions later!!!


const Navbar: FunctionComponent<{setFooter: Function}> = (props:{setFooter: Function}): JSX.Element => 
       {

        const navigate: NavigateFunction = useNavigate();

        const toHome = () => {
            navigate("/");
        };
        return (
                <StyledNavbar>
                    <IconLogo onClick={toHome} setFooter={props.setFooter}/>
                    <NavLinks navigate={navigate} setFooter={props.setFooter}/>
                    <HamburgerMenuContainer>
                        <HamburgerMenu/>
                        <StyledDropdown>
                            <Home onClick={
                            () => {
                                
                                navigate("/")
                            }
                        
                        } setFooter={props.setFooter}/>
                            <About onClick={
                            () => {
                                
                                navigate("/about")
                            }
                        
                        } setFooter={props.setFooter}/>
                        </StyledDropdown>
                    </HamburgerMenuContainer>
                </StyledNavbar>
        );
       };
   
    const Wrapper1 = (props:{children?: ReactNode, onClick: Function, setFooter: Function}) => 
        <LogoIconContentWrapper onClick={() => {
            props.setFooter();
            props.onClick();
        }}>{props.children}</LogoIconContentWrapper>;

    const Home = (props:{onClick: Function, setFooter: Function}) => 
        <li><Link onClick={
            () => {
                props.setFooter();
                props.onClick();
            }
        }>Home</Link></li>;

    const About = (props:{onClick: Function, setFooter: Function}) => 
        <li><Link onClick={
            () => {
                props.setFooter();
                props.onClick();
            }
        }>About</Link></li>;

    const HamburgerMenu = (props:{}) => 
        <HBM>&#9776;</HBM>;

    const IconLogo = (props: {onClick: Function, setFooter: Function}) =>
        <Wrapper1 onClick={props.onClick} setFooter={props.setFooter}> 
            <GithubIcon/>
            <Logo>
                Github Finder
            </Logo>
        </Wrapper1>;

    const NavLinks = (props:{navigate: NavigateFunction, setFooter: Function}) =>
        <UlNavLinks>
            <Home onClick={() => {
                props.navigate("/");
            }
            } setFooter={props.setFooter}/>
            <About onClick={() => {
                props.navigate("/about");
            }
            } setFooter={props.setFooter}/>
        </UlNavLinks>;


export default Navbar;