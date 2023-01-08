import styled, { StyledComponent } from "styled-components";

interface Props  {
    isLoading: boolean;
}

export const GridWrapper: StyledComponent<"div",any,Props,never> = styled.div<Props>`

color: white;

justify-content: ${props => props.isLoading && "center"};

align-items: ${props => props.isLoading && "center"};

display: grid;

height: 100%;

grid-template-columns: auto auto auto;

overflow: scroll;

padding: 2rem;

@media(max-width:768px){

    grid-template-columns: auto auto;

}

@media(max-width:450px){
    grid-template-columns:auto;
}

`;