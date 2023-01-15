import styled, { StyledComponent } from "styled-components";
import { TypeStyledComponent } from "../../types/styled_component/types";
import { Row, Column } from "../global/BaseFlex";

interface ClearButtonProps {
    type?: "button";
}

interface InputButtonProps {
    type?: "submit";
}


const FlexWrapper= 
    styled(Column)`

    // background: red;

    padding-top: 2.5rem;

    margin: auto;

    gap: 1rem;

    @media (min-width: 1024px){

    flex-direction: row;
    
    gap: 0rem;

    }
    
`;

const Form: TypeStyledComponent<"form", {}> = 
    styled.form`

    display: flex;

    flex-direction: row;

    width: fit-content;

    border-radius: 20px;

    overflow: hidden;

    @media (max-width: 450px){
        width: 20rem;
    }

    @media (max-width: 350px){
        width: 18rem;
    }

`;

const Input: TypeStyledComponent<"input", {}> = 
    styled.input`

    outline: none;

    padding: 1.25rem;

    font-size: 2rem;

`;

const ClearButton: TypeStyledComponent<"button", ClearButtonProps> = 
    styled.button<ClearButtonProps>`

    width: 10rem;

    padding: 1.25rem;

    border: none;

    background: none;

    color: white;

    font-weight: bold;

    font-size: 1rem;

    @media (min-width: 1024px){

        flex-direction: row;

        width: 8rem;

        
        gap: 0rem;
    
        }
   
    `;

const InputButton: TypeStyledComponent<"button", InputButtonProps> =
    styled.button<InputButtonProps>`

    width: 10rem;

    background: #25262a;

    color: white;

    font-weight: bold;
   
    font-size: 1rem;

    border: none;

    `;

export {FlexWrapper, Form, Input, ClearButton, InputButton};