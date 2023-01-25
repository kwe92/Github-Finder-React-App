import styled from "styled-components";
import { TypeStyledComponent } from "../types/styled_component/types";
import rotate  from "./Keyframes";
import { Row } from "../components/global/BaseFlex";

const SpinnerImage: TypeStyledComponent<"img",{}> = styled.img`
max-width: 100%;
`

const SpinnerContainer = styled(Row)`
    
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