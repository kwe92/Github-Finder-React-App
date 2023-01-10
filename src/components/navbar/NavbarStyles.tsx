import styled, { Interpolation, StyledComponent, StyledComponentBase } from "styled-components";
import {FaGithub} from "react-icons/fa";
import { Link as RouterLink} from "react-router-dom";
import { TypeStyledComponent } from "../../types/styled_component/types";

const NavbarTheme = {
    fc: "white", //font-color
    fsXL: "1.875rem" // font-size xtra large
};

const Link: TypeStyledComponent<typeof RouterLink, {}> = styled(RouterLink)`

color: ${NavbarTheme.fc};

font-size: ${NavbarTheme.fsXL};
`;

const Navbar: TypeStyledComponent<"nav", {}> = styled.nav`

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

const Logo:TypeStyledComponent<"div",{}>  = styled.div`

color: ${NavbarTheme.fc};

font-size: ${NavbarTheme.fsXL};

@media (max-width: 425px){

    display: none;

}

`;

const GithubIcon: TypeStyledComponent<typeof FaGithub, {}> = styled(FaGithub)`

font-size: ${NavbarTheme.fsXL};

color: ${NavbarTheme.fc};

`;

const UlNavLinks: TypeStyledComponent<"ul", {}> = styled.ul`

display: flex;

color: ${NavbarTheme.fc};

font-size: ${NavbarTheme.fsXL};

gap: 1rem;

padding-right: 1.5rem;

@media (max-width:768px){

    display: none;
}

`;

const HamburgerMenuContainer: TypeStyledComponent<"ul", {}> = styled.ul`

display: none;

@media (max-width:768px){
    display: block;
}

`;

const HamburgerMenu: TypeStyledComponent<"label", {}> = styled.label`

color: ${NavbarTheme.fc};

font-size: 3rem;

display: none;

padding-right: 1.5rem;

@media (max-width:768px){

    display: block;
}

`;

const LogoIconContentWrapper: TypeStyledComponent<"div",{}> = styled.div`

display: flex;

gap:1rem;

padding-left: 1.5rem;

`;

const StyledDropdown: TypeStyledComponent<"ul", {}> = styled.ul`

background: #25262a;

box-shadow: 0px 1px 2px grey;
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