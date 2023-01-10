import styled from "styled-components";
import { TypeStyledComponent } from "../../types/styled_component/types";
import { FaUsers } from "react-icons/fa";
import { IconType } from "react-icons";

const Row: TypeStyledComponent<"div", {}> = styled.div`

    display: flex;

`;

const Column: TypeStyledComponent<"div", {}> = styled.div`

    display: flex;

    flex-direction: column;

`;

const MainContainer: TypeStyledComponent<"div", {}> = styled.div`

    align-self: flex-start;

`;

const TextIcon: TypeStyledComponent<"button", {}> = styled.button`
    
    background: none;

    border: none;

    color: white;

`;

const ProfileImage: TypeStyledComponent<"img", {}> = styled.img`

    max-width: 100%

`;

const NameImageContainer = styled(Row)`

    position: relative;

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

`;

const LocationInfoContainer = styled(Row)`

    // gap: 2rem;

` as TypeStyledComponent<typeof Row, {}>;

const ListTile: TypeStyledComponent<any, {}> = styled(Column)`

    color: white;

    position: relative;

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
    border: 1px solid red;

    // height: 100%;

    height: 3rem;

    margin: 0px 20px;

`;

const IconListTileContainer = styled(Row)`

    position: relative;

    // background: orange;

    width: fit-content;

    gap: 4rem;

` as TypeStyledComponent<typeof Row, {}>;

const IconUsers: TypeStyledComponent<IconType, {}> = styled(FaUsers)`

    font-size: 2rem;

    color: #3259b3;

`;

export {MainContainer, TextIcon, ProfileImage, NameImageContainer, UserName, UserLogin, UserNameContainer, DescriptionContainer, NameContentContainer, UserBadge, Bio ,Row, Column, ProfileUrlButton, LocationInfoContainer, ListTile, ListTileContentBottom, ListTileContentTop,VerticalLine, IconListTileContainer, IconUsers}