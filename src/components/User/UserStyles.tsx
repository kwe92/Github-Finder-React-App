import styled from "styled-components";
import { TypeStyledComponent } from "../../types/styled_component/types";
import { FaUsers, FaUserFriends } from "react-icons/fa";
import { FiBox } from "react-icons/fi";
import { BsFillInboxesFill, BsFillEyeFill, BsInfoLg } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { BiGitRepoForked, BiLink } from "react-icons/bi";
import { IconType } from "react-icons";

interface IconBadgeProps {
    primary: string;
    secondary: string;
}

const Row: TypeStyledComponent<"div", {}> = styled.div`

    display: flex;

`;

const Column: TypeStyledComponent<"div", {}> = styled.div`

    display: flex;

    flex-direction: column;

`;

const MainContainer = styled(Column)`

    overflow: scroll;

    padding-top: 1rem;

    gap: 2.25rem;

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

`;

const UserNameContainer = styled(Column)`

    gap: 0.5rem;

    position: absolute;

    top: 80%;

    left: 10%;

`;

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

`;


const NameContentContainer= styled(Row)`

    height: fit-content;

    // background: blue;

    align-items: center;
    
    gap: 0.5rem;

`;


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

    &:hover{
        color:  #ff9e00;
        border-color: #ff9e00;
    }

`;

const LocationInfoContainer = styled(Row)`

    @media(max-width:450px){
        justify-content: center;
    }

`;

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

`;

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

const IconUserFriends: TypeStyledComponent<IconType, {}> = styled(FaUserFriends)`

    font-size: 2rem;

    color: #3259b3;

`;

const IconBox: TypeStyledComponent<IconType, {}> = styled(FiBox)`

    font-size: 2rem;

    color: #3259b3;

`;

const IconInBox: TypeStyledComponent<IconType, {}> = styled(BsFillInboxesFill)`

    font-size: 2rem;

    color: #3259b3;

`;

const IconEye: TypeStyledComponent<IconType, {}> = styled(BsFillEyeFill)`

    font-size: 1rem;

`;

const IconStar: TypeStyledComponent<IconType, {}> = styled(AiFillStar)`

    font-size: 1rem;

`;

const IconInfo: TypeStyledComponent<IconType, {}> = styled(BsInfoLg)`

    font-size: 1rem;

`;

const IconFork: TypeStyledComponent<IconType, {}> = styled(BiGitRepoForked)`

    font-size: 1rem;

`;

const IconLink: TypeStyledComponent<IconType, {}> = styled(BiLink)`

    font-size: 2rem;

`;

const IconListTileContainerWrapper = styled(Row)`

    gap: 2rem;

    @media(max-width:450px){
        
        display: grid;

        grid-template-columns: auto auto;

        gap: 1rem;
    }

`;


const ListTileRepoContaner: TypeStyledComponent<"ul", {}> = styled.ul`

    display: flex;

    flex-direction: column;

    color: white;

    gap: 1rem;
`;

const ListTileRepoItem = styled(Column)`

    background: #25262a;

    gap: 1.5rem;

    padding: 2.5rem;


`;

const IconListTileRepo: TypeStyledComponent<"a", {}> = styled.a`

    display: flex;

    gap: 0.5rem;

    align-items: center;

    text-decoration: none;

    color: #eee;

    &:hover{
        color:  #ff9e00;
    }

`;

const BadgeRow = styled(Row)`

    gap: 1rem;

`;

const IconBadge = styled(Row)<IconBadgeProps>`

    gap: 0.75rem;

    color: ${props => props.primary};

    background: ${props => props.secondary};

`;

const RepoTitle: TypeStyledComponent<"p",{}> = styled.p`

    font-size: 1.25rem;

`;

const RepoHeader: TypeStyledComponent<"h2", {}> = styled.h2`

    color: white;

`;



export {
          MainContainer
        , TextIcon
        , ProfileImage
        , NameImageContainer
        , UserName
        , UserLogin
        , UserNameContainer
        , DescriptionContainer
        , NameContentContainer
        , UserBadge
        , HireableBadge
        , Bio
        , Row 
        , Column
        , ProfileUrlButton
        , LocationInfoContainer
        , ListTile
        , ListTileContentBottom
        , ListTileContentTop
        , VerticalLine
        , IconListTileContainer
        , IconUsers
        , ImageDescriptionContainer
        , IconListTileContainerWrapper
        , MainInnerContainer
        , LogoIconVerticalLine
        , ListTileRepoContaner
        , ListTileRepoItem
        , BadgeRow
        , IconBadge
        , IconUserFriends
        , IconBox
        , IconInBox
        , IconEye
        , IconStar
        , IconInfo
        , IconFork
        , IconListTileRepo
        , IconLink
        , RepoTitle
        , RepoHeader
        , 
     }