import styled, { Interpolation } from "styled-components";
import {FaGithub} from "react-icons/fa";
import { Link as RouterLink} from "react-router-dom";

const NavbarTheme = {
    fc: "white", //font-color
    fsXL: "1.875rem" // font-size xtra large
}

export const Link = styled(RouterLink)`

color: ${NavbarTheme.fc};

font-size: ${NavbarTheme.fsXL};
`;

export const Navbar = styled.nav`

justify-content: space-between;

display: flex;

// position: fixed;

align-items: center;

height: 6rem;

background: #3259b3;

${Link} {

    text-decoration: none;

    &: hover {
        color: #ff9e00;
    }
}:
`;

export const Logo = styled.div`

color: ${NavbarTheme.fc};

font-size: ${NavbarTheme.fsXL};

@media (max-width: 425px){

    display: none;

}
`;

export const GithubIcon = styled(FaGithub)`

font-size: ${NavbarTheme.fsXL};

color: ${NavbarTheme.fc};

`;

export const UlNavLinks = styled.ul`

display: flex;

color: ${NavbarTheme.fc};

font-size: ${NavbarTheme.fsXL};

gap: 1rem;

padding-right: 1.5rem;

@media (max-width:768px){

    display: none;
}

`;

export const HamburgerMenuContainer = styled.ul`

display: none;

@media (max-width:768px){
    display: block;
}
`

export const HamburgerMenu = styled.label`

color: ${NavbarTheme.fc};

font-size: 3rem;

display: none;

padding-right: 1.5rem;

@media (max-width:768px){

    display: block;
}

`;

export const LogoIconContentWrapper = styled.div`

display: flex;

gap:1rem;

padding-left: 1.5rem;

`;

export const StyledDropdown = styled.ul`

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


