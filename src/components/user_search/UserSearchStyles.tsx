import styled, { StyledComponent } from "styled-components";
import { ContainerType } from "../../types/state/styled_component/types";

interface ClearButtonProps {
    type?: "button";
}

interface InputButtonProps {
    type?: "submit";
}


const FlexWrapper: ContainerType<{}> = 
    styled.div`

    // background: green;

    padding-top: 2.5rem;

    display: flex;

    flex-direction: column;

    margin: auto;

    gap: 1rem;

    @media (min-width: 1024px){

    flex-direction: row;
    
    gap: 0rem;

    }
    
`;

const Form: StyledComponent<"form", any, {}, never> = 
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

const Input: StyledComponent<"input", any, {}, never> = 
    styled.input`

    outline: none;

    padding: 1.25rem;

    font-size: 2rem;

`;

const ClearButton: StyledComponent<"button", any, ClearButtonProps, never> = 
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

const InputButton: StyledComponent<"button", any, InputButtonProps, never> =
    styled.button<InputButtonProps>`

    width: 10rem;

    background: #25262a;

    color: white;

    font-weight: bold;
   
    font-size: 1rem;

    border: none;

    `;

export {FlexWrapper, Form, Input, ClearButton, InputButton};