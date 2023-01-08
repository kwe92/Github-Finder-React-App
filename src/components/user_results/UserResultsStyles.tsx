import styled, { StyledComponent } from "styled-components";
import { ContainerType } from "../../types/state/styled_component/types";

interface Props  {
    isLoading: boolean;
}

export const GridWrapper: ContainerType<Props> = styled.div<Props>`

justify-content: ${props => props.isLoading && "center"};

align-items: ${props => props.isLoading && "center"};

display: grid;

grid-template-columns: auto auto auto;

overflow: scroll;

@media(max-width:768px){

    grid-template-columns: auto auto;

}

@media(max-width:450px){
    grid-template-columns:auto;
}

`;