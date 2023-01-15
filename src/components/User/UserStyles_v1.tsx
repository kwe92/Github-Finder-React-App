import styled from "styled-components";
// import { TypeStyledComponent } from "../../types/styled_component/types";
// import { FaUsers, FaUserFriends } from "react-icons/fa";
// import { FiBox } from "react-icons/fi";
// import { BsFillInboxesFill, BsFillEyeFill, BsInfoLg } from "react-icons/bs";
// import { AiFillStar } from "react-icons/ai";
// import { BiGitRepoForked, BiLink } from "react-icons/bi";
// import { IconType } from "react-icons";

// interface IconBadgeProps {
//     primary: string;
//     secondary: string;
// }

// const Row: TypeStyledComponent<"div", {}> = styled.div`

//     display: flex;

// `;

// const Column: TypeStyledComponent<"div", {}> = styled.div`

//     display: flex;

//     flex-direction: column;

// `;

// const MainContainer = styled(Column)`

//     overflow: scroll;

//     padding-top: 1rem;

//     gap: 2.25rem;

//     width: 95vw;


//     @media(max-width: 768px){

//         width: 95vw;

//     }

// `;

// const MainInnerContainer = styled(Column)`

//     gap: 2rem;

//     @media(max-width:450px){
//         gap:0.75;
//     }

// `;

// const TextIcon: TypeStyledComponent<"button", {}> = styled.button`
    
//     align-self: flex-start;

//     background: none;

//     border: none;

//     color: white;

//     @media(max-width:450px){
//         display: none;
//     }

// `;

// const ProfileImage: TypeStyledComponent<"img", {}> = styled.img`
//     width: 24rem;

//     @media(max-width:850px){
//         width: 18rem;
//     }

//     @media(max-width:450px){
//         width: 100%;
//     }
// `;

// const NameImageContainer = styled(Row)`

//     @media(max-width:450px){
//         width: auto;
//     }

// `;

// const UserNameContainer = styled(Column)`

//     gap: 0.5rem;

//     position: absolute;

//     top: 80%;

//     left: 10%;

// `;

// const UserName: TypeStyledComponent<"p", {}> = styled.p`

//     color: white;

//     font-weight: bold;

//     font-size: 1.5rem;

//     @media(max-width: 900px){
//     font-size: 1rem;
//     }

// `;

// const UserLogin: TypeStyledComponent<"p", {}> = styled.p`

//     color: white;

//     font-size: 1.5rem;

//     @media(max-width:900px){
//         font-size: 1rem;
//     }

//     @media(max-width:300px){
//         display: none;
//     }

// `;

// const DescriptionContainer = styled(Column)`

//     // background: green;
    
//     justify-content: space-between;

//     gap: 2.25rem;

//     padding: 1rem 0rem;

// `;


// const NameContentContainer= styled(Row)`

//     height: fit-content;

//     // background: blue;

//     align-items: center;
    
//     gap: 0.5rem;

//     @media(max-width:450px){
//         justify-content: center;
//     }

// `;

// const Bio = styled(Row)`

//     align-items: center;

//     color: white;

//     padding-right: 0.5rem;

//     @media(max-width:450px){
//         text-align: center;
//     }
// `;

// const ProfileUrlButton: TypeStyledComponent<"a", {}> = styled.a`

//     text-decoration: none;

//     width: fit-content;

//     color: white;

//     background: none;

//     padding: 1rem 3rem;

//     border: 2px solid white;

//     border-radius: 10px;

//     @media(max-width:450px){
//         align-self: center;
//     }

//     &:hover{
//         color:  #ff9e00;
//         border-color: #ff9e00;
//     }

// `;

// const ListTile: TypeStyledComponent<any, {}> = styled(Column)`

//     color: white;

//     gap: 0.25rem;

 

// `;

// const LocationInfoContainer = styled(Row)`

//     @media(max-width:450px){
//         justify-content: center;

//         display: grid;

//         grid-template-columns: auto auto;

//         grid-column-gap: 1rem;

//         grid-row-gap: 0.5rem;
//     }

//     ${ListTile} {

//         gap: 0.125rem;
        
//     }
// `;


// const ListTileContentTop: TypeStyledComponent<"p", {}> = styled.p`

//     color: grey;

//     font-size: 1rem;

// `;

// const ListTileContentBottom: TypeStyledComponent<"p", {}> = styled.p`

//     font-size: 1.25rem;

//     font-weight: bold;

//     @media(max-width:900px){
//         font-size: 1rem;
//     }

// `;

// const VerticalLine: TypeStyledComponent<"div", {}> = styled.div`

//     //TODO: Change to grey or some form of grey
//     background: grey;

//     padding: 0rem 0.03125rem;
    
//     margin: 0rem 1.75rem;

//     height: 3rem;

//     @media(max-width:900px){

//         margin: 0rem 1.25rem;
        
//     }

//     @media(max-width:768px){

//         margin: 0rem 1rem;

//         background: grey;

//     };

//     @media(max-width:450px){

//         margin: 0rem 1rem;

//         // TODO: maybe remove display: none;
//         display: none;

//     }

// `;

// const LogoIconVerticalLine: TypeStyledComponent<"div", {}> = styled.div`

//     //TODO: Change to grey or some form of grey

//     background: grey;

//     padding: 0rem 0.03125rem;

//     height: 3rem;

//     @media(max-width:768px){
        
//         display: none;

//     }

// `;


// const IconListTileContainer = styled(Row)`

//     // background: orange;

//     gap: 4rem;

//     @media(max-width:900px){
//     gap: 2rem;

//     }
    
//     @media(max-width: 768px){

//     width: 10rem;

//     align-items: center;

//     justify-content: space-between;

//     }

//     @media(max-width:300px){
//         width: 100%;
//     }

// `;

// const ImageDescriptionContainer: TypeStyledComponent<"div", {}> = styled.div`

//     display: flex;

//     gap: 2rem;

//     @media(max-width:450px){
//         flex-direction: column;
//     }

//     @media(max-width: 768px){

//         gap: 1rem;

//     }


// `; 

// const IconUsers: TypeStyledComponent<IconType, {}> = styled(FaUsers)`

//     font-size: 2rem;

//     color: #3259b3;

// `;

// const IconUserFriends: TypeStyledComponent<IconType, {}> = styled(FaUserFriends)`

//     font-size: 2rem;

//     color: #3259b3;

// `;

// const IconBox: TypeStyledComponent<IconType, {}> = styled(FiBox)`

//     font-size: 2rem;

//     color: #3259b3;

// `;

// const IconInBox: TypeStyledComponent<IconType, {}> = styled(BsFillInboxesFill)`

//     font-size: 2rem;

//     color: #3259b3;

// `;

// const IconEye: TypeStyledComponent<IconType, {}> = styled(BsFillEyeFill)`

//     font-size: 1rem;

// `;

// const IconStar: TypeStyledComponent<IconType, {}> = styled(AiFillStar)`

//     font-size: 1rem;

// `;

// const IconInfo: TypeStyledComponent<IconType, {}> = styled(BsInfoLg)`

//     font-size: 1rem;

// `;

// const IconFork: TypeStyledComponent<IconType, {}> = styled(BiGitRepoForked)`

//     font-size: 1rem;

// `;

// const IconLink: TypeStyledComponent<IconType, {}> = styled(BiLink)`

//     font-size: 2rem;

// `;

// const IconListTileContainerWrapper = styled(Row)`

//     gap: 1.5rem;

//     align-items: center;

//     justify-content: center;

//     @media(max-width:768px){
        
//         display: grid;

//         grid-template-columns: auto auto;
//     }

//     @media(max-width:300px){

//         display: flex;

//         flex-direction: column;

//         padding: 0rem 0.5rem;
//     }
// `;


// const ListTileRepoContaner: TypeStyledComponent<"ul", {}> = styled.ul`

//     display: flex;

//     flex-direction: column;

//     color: white;

//     gap: 1rem;
// `;

// const ListTileRepoItem = styled(Column)`

//     background: #25262a;

//     gap: 1.5rem;

//     padding: 2.5rem;


// `;

// const IconListTileRepo: TypeStyledComponent<"a", {}> = styled.a`

//     display: flex;

//     gap: 0.5rem;

//     align-items: center;

//     text-decoration: none;

//     color: #eee;

//     &:hover{
//         color:  #ff9e00;
//     }

// `;

// const BadgeRow = styled(Row)`

//     gap: 1rem;

// `;

// const IconBadge = styled(Row)<IconBadgeProps>`

//     gap: 0.5rem;

//     padding: 0.125rem 0.25rem;

//     border-radius: 1rem;

//     color: ${props => props.primary};

//     background: ${props => props.secondary};

// `;

// const RepoTitle: TypeStyledComponent<"p",{}> = styled.p`

//     font-size: 1.25rem;

// `;

// const RepoHeader = styled(Row)`

//     font-size: 1.5rem;

//     color: white;

//     align-items: center;

//     justify-content: center;

// `;



// export {
//           MainContainer
//         , TextIcon
//         , ProfileImage
//         , NameImageContainer
//         , UserName
//         , UserLogin
//         , UserNameContainer
//         , DescriptionContainer
//         , NameContentContainer
//         , Bio
//         , Row 
//         , Column
//         , ProfileUrlButton
//         , LocationInfoContainer
//         , ListTile
//         , ListTileContentBottom
//         , ListTileContentTop
//         , VerticalLine
//         , IconListTileContainer
//         , IconUsers
//         , ImageDescriptionContainer
//         , IconListTileContainerWrapper
//         , MainInnerContainer
//         , LogoIconVerticalLine
//         , ListTileRepoContaner
//         , ListTileRepoItem
//         , BadgeRow
//         , IconBadge
//         , IconUserFriends
//         , IconBox
//         , IconInBox
//         , IconEye
//         , IconStar
//         , IconInfo
//         , IconFork
//         , IconListTileRepo
//         , IconLink
//         , RepoTitle
//         , RepoHeader
//         , 
//      }