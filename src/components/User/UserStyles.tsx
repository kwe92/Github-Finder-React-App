import styled, { StyledComponent } from "styled-components";
import { TypeStyledComponent } from "../../types/styled_component/types";
import { FaUsers } from "react-icons/fa";
import { IconType } from "react-icons";

const Row: TypeStyledComponent<"div", {}> = styled.div`

    display: flex;

`;

// const Row: StyledComponent<"div", any, {}, never> = styled.div`

//     display: flex;

// `;


const Column: TypeStyledComponent<"div", {}> = styled.div`

    display: flex;

    flex-direction: column;

`;

const MainContainer: TypeStyledComponent<"div", {}> = styled.div`

    // align-self: flex-start;

    overflow: scroll;

    @media(max-width: 768px){

        width: 95vw;

    }

`;

const MainInnerContainer = styled(Column)`

    gap: 2rem;

    @media(max-width:450px){
        gap:0.75;
    }

`;

const TextIcon: TypeStyledComponent<"button", {}> = styled.button`
    
    align-self: flex-start;

    background: none;

    border: none;

    color: white;

    @media(max-width:450px){
        display: none;
    }

`;

const ProfileImage: TypeStyledComponent<"img", {}> = styled.img`

    max-width: 100%

`;

const NameImageContainer = styled(Row)`

    position: relative;

    width: 20rem;

    @media(max-width:450px){
        width: auto;
    }

` as TypeStyledComponent<typeof Row, {}>;

const UserNameContainer = styled(Column)`

    gap: 0.5rem;

    position: absolute;

    top: 80%;

    left: 10%;

` as TypeStyledComponent<typeof Column, {}>;

const UserName: TypeStyledComponent<"p", {}> = styled.p`

    color: white;

    font-weight: bold;

    font-size: 2rem;

`;

const UserLogin: TypeStyledComponent<"p", {}> = styled.p`

    color: white;

    font-size: 1rem;

`;

const DescriptionContainer = styled(Column)`

    // background: green;

    gap: 2.25rem;

` as TypeStyledComponent<typeof Column, {}>;


const NameContentContainer= styled(Row)`

    height: fit-content;

    // background: blue;

    align-items: center;
    
    gap: 0.5rem;

` as TypeStyledComponent<typeof Row, {}>;


const UserBadge: TypeStyledComponent<"div", {}> = styled.div`

    color: white;

`;

const HireableBadge: TypeStyledComponent<"div", {}> = styled.div`

    color: white;

`;

const Bio: TypeStyledComponent<"div", {}> = styled.div`

    color: white;

`;

const ProfileUrlButton: TypeStyledComponent<"a", {}> = styled.a`

    text-decoration: none;

    width: fit-content;

    color: white;

    background: none;

    padding: 1rem 3rem;

    border: 2px solid white;

    border-radius: 10px;

    @media(max-width:450px){
        align-self: center;
    }

`;

const LocationInfoContainer = styled(Row)`

    // gap: 2rem;

    @media(max-width:450px){
        justify-content: center;
    }

` as TypeStyledComponent<typeof Row, {}>;

const ListTile: TypeStyledComponent<any, {}> = styled(Column)`

    color: white;

`;

const ListTileContentTop: TypeStyledComponent<"p", {}> = styled.p`

    color: grey;

    font-size: 1rem;

`;

const ListTileContentBottom: TypeStyledComponent<"p", {}> = styled.p`

    font-size: 1.25rem;

    font-weight: bold;

`;

const VerticalLine: TypeStyledComponent<"div", {}> = styled.div`

    //TODO: Change to grey or some form of grey
    border: 1px solid grey;

    // height: 100%;
    
    margin: 0rem 2rem;

    height: 3rem;

    @media(max-width:450px){
        
    margin: 0rem 1rem;

    }

`;

const LogoIconVerticalLine: TypeStyledComponent<"div", {}> = styled.div`

    //TODO: Change to grey or some form of grey
    border: 1px solid grey;

    height: 3rem;

    @media(max-width:450px){
        
        display: none;

    }

`;


const IconListTileContainer = styled(Row)`

    // background: orange;

    gap: 4rem;

    @media(max-width: 768px){

        width: 10rem;
        gap: 2rem;

    }

` as TypeStyledComponent<typeof Row, {}>;

const ImageDescriptionContainer: TypeStyledComponent<"div", {}> = styled.div`

    display: flex;

    gap: 2rem;

    @media(max-width:450px){
        flex-direction: column;
    }

    @media(max-width: 768px){

        gap: 1rem;

    }


`; 

const IconUsers: TypeStyledComponent<IconType, {}> = styled(FaUsers)`

    font-size: 2rem;

    color: #3259b3;

`;

const IconListTileContainerWrapper = styled(Row)`

    gap: 2rem;

    @media(max-width:450px){
        
        display: grid;

        grid-template-columns: auto auto;

        gap: 1rem;
    }

`;


export {MainContainer, TextIcon, ProfileImage, NameImageContainer, UserName, UserLogin, UserNameContainer, DescriptionContainer, NameContentContainer, UserBadge, HireableBadge, Bio ,Row, Column, ProfileUrlButton, LocationInfoContainer, ListTile, ListTileContentBottom, ListTileContentTop,VerticalLine, IconListTileContainer, IconUsers, ImageDescriptionContainer, IconListTileContainerWrapper, MainInnerContainer, LogoIconVerticalLine}