import styled, { StyledComponent } from "styled-components";
import {Link} from "react-router-dom";
import { LinkProps } from "react-router-dom";
import { TypeStyledComponent } from "../../types/styled_component/types";
import { Row, Column } from "../global/BaseFlex";

export const ListTile = styled(Row)`

    gap: 1rem;

    border-radius: 25px;

    align-items: center;

    margin: 0.5rem;

    height: 8rem;

    width: 25rem;

    //TODO: Make box-shadow color brighter
    
    box-shadow: 1px 2px 4px #292727;

    padding: 2rem 1rem;

    @media(max-width:1024px){
        padding: 1rem 1rem;
        width: 19rem;
    }

    @media (max-width:768px) {
        width: 18rem;
    }

    @media (max-width: 450px){
        width: 20.5rem;
    }

    @media (max-width: 400px){
        width: 18rem;
    }

    @media (max-width: 350px){
        width: 15rem;
    }


`;

export const UserAvatarIcon: TypeStyledComponent<"img",{}> = styled.img`

    max-width:100%;
    
    border-radius: 50%;

`;

export const UserImageContainer = styled(Row)`

    border-radius: 50%;

    background: blue;

    width: 5rem;

`;

export const ContentContainer= styled(Column)`

    gap: 0.5rem;

`;

export const Username: TypeStyledComponent<"p",{}> = styled.p`

    color: white;

    font-size: 1.25rem;

    font-weight: bolder;

`;

export const ViewProfile: TypeStyledComponent<React.ForwardRefExoticComponent<LinkProps & React.RefAttributes<HTMLAnchorElement>>,{}>
=  styled(Link)`

    color: grey;

    font-size: 1.25rem;

    font-weight: bolder;

    text-decoration: none;
    
`;


export const ViewProfile2: TypeStyledComponent<"div",{}>
=  styled.div`

    color: grey;

    font-size: 1.25rem;

    font-weight: bolder;

    text-decoration: none;
    
`;