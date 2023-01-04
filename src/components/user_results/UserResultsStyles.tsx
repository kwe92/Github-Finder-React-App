import styled from "styled-components";
import {ListTile} from "../user_item/UserItemStyles"

interface _props{
    isLoading: boolean;
}

export const GridWrapper = styled.div<_props>`

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