import styled from "styled-components";
import { TypeStyledComponent } from "../../types/styled_component/types";
 const ErrorMessage: TypeStyledComponent<"div",{}> = styled.div`

 color: orange;

 font-size: 2rem;

 @media(max-width:450px){
    font-size: 1.5rem;
 }

`;

export {ErrorMessage};