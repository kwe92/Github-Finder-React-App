import styled from "styled-components";
import {FaSlackHash} from "react-icons/fa"
import {AiOutlineCopyright} from "react-icons/ai"

export const HashTag = styled(FaSlackHash)`

    color: white;

    font-size: 4rem;

`;

export const FooterContentWrapper = styled.div`

    display: flex;

    flex-direction: column;

    align-items: center;

    gap: 1.5rem;

`;

export const CopyrightIcon = styled(AiOutlineCopyright)`

    color: white;

`;

export const CopyrightContent = styled.p`

    color: white;

`;


export const Footer = styled.div`

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

`