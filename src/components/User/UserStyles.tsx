import styled, {css} from "styled-components";
import { TypeStyledComponent } from "../../types/styled_component/types";
import { FaUsers, FaUserFriends } from "react-icons/fa";
import { FiBox } from "react-icons/fi";
import { BsFillInboxesFill, BsFillEyeFill, BsInfoLg } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { BiGitRepoForked, BiLink } from "react-icons/bi";
import { IconType } from "react-icons";
import { Row, Column} from "../global/BaseFlex";
import { tiltShake } from "../../keyframes/TiltShake";

interface IconBadgeProps {
    primary: string;
    secondary: string;
}

const MainContainer = styled(Column)`

    overflow: scroll;

    padding-top: 2.75rem;

    gap: 3.75rem;

    width: 90vw;

    @media(max-width: 800px){

        width: 87.5vw;

        padding-top: 2.25rem;


    }

`;

const MainInnerContainer = styled(Column)`

    gap: 2.75rem;

    // @media(max-width:450px){
    //     gap:0.75;
    // }

    @media(max-width:675px){
        gap:0.75;
    }

`;

const TextIcon: TypeStyledComponent<"button", {}> = styled.button`
    
    align-self: flex-start;

    background: none;

    border: none;

    color: white;

    // @media(max-width:450px){
    //     display: none;
    // }

    @media(max-width:675px){
        display: none;
    }

`;

const ProfileImage: TypeStyledComponent<"img", {}> = styled.img`
    
    width: 24rem;

    border-radius: 0.5rem;

    @media(max-width:850px){

        width: 18rem;

        height: 100%;
    }

    // @media(max-width:450px){
    //     width: 100%;
    // }

    @media(max-width:675px){
        width: 100%;
    }
`;

const ButtonImageContainer = styled(Column)`

    gap: 1.5rem;

    align-items: center;

    justify-content: center;

    @media(max-width:800px){
        justify-content: space-between;
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

    font-size: 1.5rem;

    @media(max-width: 900px){
    display: none;
    }

`;

const UserLogin: TypeStyledComponent<"p", {}> = styled.p`

    color: white;

    font-size: 1.5rem;

`;

const DescriptionContainer = styled(Column)`

    width: 75%;

    margin-left: 0.1875rem;
    
    justify-content: space-between;

    gap: 2.25rem;

    @media(max-width: 1024px){
    width: 55%;
    }

    @media(max-width: 850px){
        width: 52.5%;
        }

    @media(max-width:675px){
        width: auto;
        margin: 0;
        }
`;

const Bio = styled(Row)`

    align-items: center;

    color: white;

    font-size: 1.25rem;

    // padding-right: 0.5rem;

    // @media(max-width:450px){
    //     text-align: center;
    // }
    
    @media(max-width:675px){
        text-align: center;
    }
`;

const ProfileUrlButton: TypeStyledComponent<"a", {}> = styled.a`

    text-decoration: none;

    width: 100%;

    text-align: center;

    color: white;

    background: none;

    padding: 1rem 3rem;

    border: 0.125rem solid white;

    border-radius: 0.625rem;

    // @media(max-width:450px){
    //     align-self: center;
    // }

    @media(max-width:675px){
        align-self: center;
    }

    &:hover{
        color:  #ff9e00;
        border-color: #ff9e00;
    }

`;

const ListTile: TypeStyledComponent<any, {}> = styled(Column)`

    color: white;

    gap: 0.75rem;
 
`;

const ListTileContentTop: TypeStyledComponent<"p", {}> = styled.p`

    color: grey;

    font-size: 1.25rem;

    @media(max-width:1024px){
        font-size: 1rem;
    }

`;

const ListTileContentBottom: TypeStyledComponent<"p", {}> = styled.p`

    font-size: 1.75rem;

    font-weight: bold;

    @media(max-width:1024px){
        font-size: 1.25rem;
        
    }

`;


const LocationInfoContainer = styled(Row)`

    justify-content: space-between;

    display: grid;

    grid-template-columns: auto;

    grid-row-gap: 1.75rem;

    @media(max-width:675px){
        display: none;
    }

    overflow: scroll;

    ${ListTile} {

        gap: 0.75rem;

        @media(max-width:850px){
          font-size: 1.125rem;
        }
    }
        
    }

    ${ListTileContentBottom}{
        font-size: 1.5rem;

        @media(max-width:850px){
            font-size: 1.125rem;
          }
    }
`;

const VerticalLine: TypeStyledComponent<"div", {}> = styled.div`

    //TODO: Change to grey or some form of grey
    background: grey;

    display: none;

    padding: 0rem 0.03125rem;
    
    margin: 0rem 4rem;

    // height: 3rem;

    @media(max-width:1024px){

        // margin: 0rem 1.25rem;
        display: none;
        
    }

    @media(max-width:768px){

        margin: 0rem 1rem;

        background: grey;

    };

    // @media(max-width:450px){

    //     margin: 0rem 1rem;

    // }

    @media(max-width:675px){

        margin: 0rem 1rem;

    }

`;

const LogoIconVerticalLine: TypeStyledComponent<"div", {}> = styled.div`

    //TODO: Change to grey or some form of grey

    background: grey;

    padding: 0rem 0.03125rem;

    height: 4rem;

    margin: 0rem 1.25rem;

    @media(max-width:768px){
        
        display: none;

    }

`;


const IconListTileContainer = styled(Row)`

    gap: 4rem;

    width: 100%;

    align-items: center;

    justify-content: space-between;

    @media(max-width:900px){
    gap: 2rem;
    }
    
    @media(max-width: 768px){
    width: auto;

    align-items: center;

    justify-content: space-between;
    }

    @media(max-width:300px){
        width: 100%;
    }

`;

const ImageDescriptionContainer: TypeStyledComponent<"div", {}> = styled.div`

    display: flex;

    gap: 1.5rem;

    // @media(max-width:450px){
    //     flex-direction: column;
    // }

    @media(max-width:675px){
        flex-direction: column;
    }

    @media(max-width: 768px){

        gap: auto;

    }


`; 

const IconCSS = css`

    font-size: 3.75rem;

    color: #3259b3;

    @media(900px){
    font-size: 1.75rem;
    }

`;

const IconUsers: TypeStyledComponent<IconType, {}> = styled(FaUsers)`
    ${IconCSS}

`;

const IconUserFriends: TypeStyledComponent<IconType, {}> = styled(FaUserFriends)`
    ${IconCSS}
`;

const IconBox: TypeStyledComponent<IconType, {}> = styled(FiBox)`
    ${IconCSS}
`;

const IconInBox: TypeStyledComponent<IconType, {}> = styled(BsFillInboxesFill)`
    ${IconCSS}
`;

const IconEye: TypeStyledComponent<IconType, {}> = styled(BsFillEyeFill)`

    // font-size: 1rem;

`;

const IconStar: TypeStyledComponent<IconType, {}> = styled(AiFillStar)`

`;

const IconInfo: TypeStyledComponent<IconType, {}> = styled(BsInfoLg)`

`;

const IconFork: TypeStyledComponent<IconType, {}> = styled(BiGitRepoForked)`

`;

const IconLink: TypeStyledComponent<IconType, {}> = styled(BiLink)`

    font-size: 2.75rem;

    @media(max-width:850px){
        font-size: 2.375rem;
    }

    @media(max-width:600px){
        font-size: 1.75rem;
    }


`;

const IconListTileContainerWrapper = styled(Row)`

    gap: 1.5rem;

    align-items: center;

    justify-content: center;

    box-shadow: 0.1250rem 0.25rem 0.375rem #25262a;

    // background: orange;

    padding: 1rem 1.5rem 1.5rem 1.5rem;

    border-radius: 0.5rem;

    @media(max-width:1024px){
        gap: 0.5rem;
    }

    @media(max-width:900px){
        gap: 0rem;
    }

    @media(max-width:768px){
        
        display: grid;

        grid-template-columns: 47.25% 47.25%;

         grid-column-gap: 2rem;

         grid-row-gap: 2rem;

    }

    @media(max-width:450px){

    grid-template-columns: 45% 45%;

    padding: 0.625rem 1.125rem 1.125rem 1.125rem;

    }

    @media(max-width:300px){

        display: flex;

        flex-direction: column;

        padding: 0rem 0.5rem;
    }
`;


const ListTileRepoContaner: TypeStyledComponent<"ul", {}> = styled.ul`

    display: flex;

    flex-direction: column;

    color: white;

    gap: 2.5rem;
`;

const ListTileRepoItem = styled(Column)`

    background: #25262a;

    gap: 1.5rem;

    padding: 2.5rem;

    border-radius: 0.5rem;


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

    font-size: 1.25rem;

    @media(max-width:450px){
        gap: 0.625rem;
    }

`;

const IconBadge = styled(Row)<IconBadgeProps>`

    gap: 0.50rem;

    padding: 0.1875rem 0.75rem;

    align-items: center;

    border-radius: 1rem;

    color: ${props => props.primary};

    background: ${props => props.secondary};

    animation: ${tiltShake} 2s linear infinite;

    @media(max-width:850px){
        font-size: 1.125rem;
    }

    @media(max-width:450px){
        font-size: 0.75rem;
    }

`;

const RepoTitle: TypeStyledComponent<"p",{}> = styled.p`

    font-size: 1.75rem;

    overflow-wrap: break-word;
    width: 100%;

    @media(max-width:850px){
        font-size: 1.325rem;
    }

    @media(max-width:450px){
        font-size: 1.125rem;
    }

`;

const RepoHeader = styled(Row)`

    font-size: 2.5rem;

    color: white;

    align-items: center;

    justify-content: center;

    @media(max-width:800px){
    font-size: 1.875rem;
    }

    @media(max-width:800px){
        font-size: 1.625rem;
        }

`;

const NameContentContainer= styled(Row)`

    height: fit-content;

    // background: blue;

    align-items: center;
    
    gap: 0.5rem;

    @media(max-width:800px){
        justify-content: space-between;
    }

    ${IconBadge}{
        font-size: 1.25rem;
    }

`;

export {
          MainContainer
        , TextIcon
        , ProfileImage
        , ButtonImageContainer
        , UserName
        , UserLogin
        , UserNameContainer
        , DescriptionContainer
        , NameContentContainer
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
     }