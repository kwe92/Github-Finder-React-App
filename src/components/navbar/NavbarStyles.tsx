import styled, { Interpolation, ThemedStyledProps } from "styled-components";
import {FaGithub} from "react-icons/fa";
import { Link } from "react-router-dom";

const NavbarTheme = {
    fc: "white", //font-color
    fsXL: "1.875rem" // font-size xtra large
}

export const StyledLink = styled(Link)`

color: ${NavbarTheme.fc};

font-size: ${NavbarTheme.fsXL};
`;


export const StyledNavbar = styled.nav`

justify-content: space-between;

display: flex;

align-items: center;

height: 6rem;

background: #3259b3;

${StyledLink} {

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

export const StyledGithubIcon = styled(FaGithub)`

font-size: ${NavbarTheme.fsXL};

color: ${NavbarTheme.fc};

`;

export const StyledUlNavLinks = styled.ul`

display: flex;

color: ${NavbarTheme.fc};

font-size: ${NavbarTheme.fsXL};

gap: 1rem;

padding-right: 1.5rem;

@media (max-width:768px){

    display: none;
}

`;

export const StyledHamburgerMenu = styled.label`

color: ${NavbarTheme.fc};

font-size: 3rem;

display: none;

padding-right: 1.5rem;

@media (max-width:768px){

    display: block;
}

`;


