import styled, { Interpolation, StyledComponent } from "styled-components";
import {FaGithub} from "react-icons/fa";
import { Link as RouterLink} from "react-router-dom";
import { ContainerType } from "../../types/state/styled_component/types";

const NavbarTheme = {
    fc: "white", //font-color
    fsXL: "1.875rem" // font-size xtra large
};

const Link: StyledComponent<typeof RouterLink, any, {}, never> = styled(RouterLink)`

color: ${NavbarTheme.fc};

font-size: ${NavbarTheme.fsXL};
`;

const Navbar = styled.nav`

justify-content: space-between;

display: flex;

position: absolute;

align-items: center;

width: 100%;

height: 6rem;

// background: #3259b3; blue

background: #25262a;

${Link} {

    text-decoration: none;

    &: hover {
        color: #ff9e00;
    }
}

`;

const Logo:ContainerType<{}>  = styled.div`

color: ${NavbarTheme.fc};

font-size: ${NavbarTheme.fsXL};

@media (max-width: 425px){

    display: none;

}

`;

const GithubIcon: StyledComponent<typeof FaGithub, any, {}, never> = styled(FaGithub)`

font-size: ${NavbarTheme.fsXL};

color: ${NavbarTheme.fc};

`;

const UlNavLinks: StyledComponent<"ul", any, {}, never> = styled.ul`

display: flex;

color: ${NavbarTheme.fc};

font-size: ${NavbarTheme.fsXL};

gap: 1rem;

padding-right: 1.5rem;

@media (max-width:768px){

    display: none;
}

`;

const HamburgerMenuContainer: StyledComponent<"ul", any, {}, never> = styled.ul`

display: none;

@media (max-width:768px){
    display: block;
}

`;

const HamburgerMenu: StyledComponent<"label", any, {}, never> = styled.label`

color: ${NavbarTheme.fc};

font-size: 3rem;

display: none;

padding-right: 1.5rem;

@media (max-width:768px){

    display: block;
}

`;

const LogoIconContentWrapper: ContainerType<{}> = styled.div`

display: flex;

gap:1rem;

padding-left: 1.5rem;

`;

const StyledDropdown: StyledComponent<"ul", any, {}, never> = styled.ul`

background-color: #3259b3;

padding: 1em 0;

position: absolute; // With respect to parent

display: none;

border-radius: 8px;

top: 35px;

li + li {
  margin-top: 10px;
}

${HamburgerMenuContainer}:hover & {
  display: block;
}

li {
  padding: 0.5em 1em;

  width: 8em;

  text-align:center;
}

li: hover{
  // Orange
  color: #ff9e00;
}

@media(max-width:768px){
  position: relative;
}
`;

export {Link, Navbar, Logo, GithubIcon, UlNavLinks, HamburgerMenuContainer, HamburgerMenu, LogoIconContentWrapper, StyledDropdown};