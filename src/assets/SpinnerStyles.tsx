import styled, { StyledComponent, StyledInterface } from "styled-components";
import rotate  from "./Keyframes";

const SpinnerImage: StyledComponent<"img", any, {}, never> = styled.img`
max-width: 100%;
`

const SpinnerContainer: StyledComponent<"div", any, {}, never> = styled.div`
    
display: flex;

// background: lightblue;

width: 15rem;

height: 15rem;

justify-content: center; 

animation: ${rotate} 2s linear infinite;


@media(max-width : 768px) {
    width: 10rem;
    height: 10rem;
}

@media(max-width : 450px) {
    width: 6rem;
    height: 6rem;
}
`;

export {
    SpinnerImage,
    SpinnerContainer,
}