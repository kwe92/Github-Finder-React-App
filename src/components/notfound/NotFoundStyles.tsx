import styled from "styled-components";
import { Type } from "typescript";
import {TypeStyledComponent} from "../../types/styled_component/types";
import {FaHouseUser} from "react-icons/fa"


const Container404: TypeStyledComponent<"div",{}> = styled.div`

    color: white;

    align-items: center;

    display: flex;

    flex-direction: column;

    gap: 1.25rem;

`;

const ErrorTitle: TypeStyledComponent<"div", {}> = styled.div`

    font-size: 8rem;

    @media (max-width:1024px){
        font-size: 6rem;
    }

    @media (max-width:768px){
        font-size: 4rem;
    }

    @media (max-width:450px){
        font-size: 2rem;
    }

`;

const ErrorContent: TypeStyledComponent<"p", {}> = styled.p`

    font-size: 4rem;

    @media(max-width:768px){
        font-size: 2rem;
    }


    @media(max-width:450px){
        font-size: 1.5rem;
    }

    @media(max-width:350px){
        font-size: 1rem;
    }
`;

const IconButtonContainer: TypeStyledComponent<"div", {}> = styled.div`

    display: flex;

    Font-size: 1.725rem;

    gap: 0.25rem;

    margin-top: 1rem;

    padding: 1.5rem 3.5rem;

    background: #1972B3ff;

    width: fit-content;

    align-items: center;

    justify-content: center;

    border-radius: 0.5rem;

    @media(max-width:768px){

    padding: 1rem 2.5rem;

    margin-top: 0.5rem;

    }

    @media(max-width:450px){
    
    padding: 0.75rem 1.5rem;

    margin-top: 0.25rem;

    font-size: 1.25rem;

    }

`;

const IconText: TypeStyledComponent<"p",{}> = styled.p`

`;

const IconHouse: TypeStyledComponent<typeof FaHouseUser,{}> = styled(FaHouseUser)`

`;

export {Container404, ErrorTitle, IconButtonContainer, IconHouse, IconText, ErrorContent};