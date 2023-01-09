import styled, { StyledComponent } from "styled-components";
import {FaSlackHash} from "react-icons/fa"
import {AiOutlineCopyright} from "react-icons/ai"
import { IconType } from "react-icons/lib";
import { TypeStyledComponent } from "../../types/state/styled_component/types";
// TODO: Change icon size maybe?

const HashTag: TypeStyledComponent<IconType, {}> = styled(FaSlackHash)`

   padding-top: 1rem;
   
   color: white;
   
   font-size: 4rem;

`;
const FooterContentWrapper: TypeStyledComponent<"div",{}> = styled.div`

    display: flex;

    flex-direction: column;

    align-items: center;

    gap: 1rem;

`;

const CopyrightIcon: TypeStyledComponent<IconType, {}> = styled(AiOutlineCopyright)`

    color: white;

`;

const CopyrightContent: TypeStyledComponent<"p", {}> = styled.p`

    color: white;

`;


const Footer: TypeStyledComponent<"div",{}> = styled.div`

    display: flex;

    flex-direction: column;

    align-items: center;

    justify-content: center;

    height: 16vh;

    background: #25262a;

    @media (max-width:1024px){
        ${HashTag} {
            font-size: 3rem;
            padding-top: 0.25rem;
        }
    }

    @media (max-width:768px){
        ${HashTag} {
            font-size: 2.5rem;
        }
    }
    @media (max-width:768px){
        ${FooterContentWrapper}{
            gap: 1rem;
        }
    }

    @media (max-width:768px){
        ${CopyrightContent}{
            font-size: x-small;
        }
    }

    @media (max-width:450px){
        ${HashTag} {
            padding: 0;
            font-size: 1.5rem;
        }
    }

`;

export {HashTag, FooterContentWrapper, CopyrightIcon, CopyrightContent, Footer};