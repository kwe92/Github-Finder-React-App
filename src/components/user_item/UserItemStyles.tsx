import styled from "styled-components";
import {Link} from "react-router-dom";

export const ListTile = styled.div`

    display: flex;

    gap: 1rem;

    border-radius: 25px;

    align-items: center;

    margin: 0.5rem;

    // background: green;

    // background: #191d24;

    box-shadow: 1px 2px 4px #292727;

    padding: 2rem 1rem;

    @media(max-width:1024px){
        padding: 1rem 1rem;
    }

`;

export const UserAvatarIcon = styled.img`

    max-width:100%;
    
    border-radius: 50%;

`;

export const UserImageContainer = styled.div`

    display: flex;

    border-radius: 50%;

    background: blue;

    width: 5rem;

`;

export const ContentContainer = styled.div`

    display: flex;

    flex-direction: column;

    gap: 0.5rem;

`;

export const Username = styled.p`

    color: white;

    font-size: 1.25rem;

    font-weight: bolder;

`;

export const ViewProfile = styled(Link)`

    color: grey;

    font-size: 1.25rem;

    font-weight: bolder;

    text-decoration: none;
    
`;