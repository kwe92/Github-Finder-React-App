import styled from "styled-components";
import { TypeStyledComponent } from "./types/state/styled_component/types";

const AppContentWrapper: TypeStyledComponent< "div",{}> = styled.div`

    height: 100vh;

    width: 100vw;

    display: flex;

    flex-direction: column;

`;

export const Container: TypeStyledComponent<"div",{}> = styled.div`

padding-top: 6rem;

display: flex;

flex-direction: column;

gap: 1rem;

height: 85%;

padding-bottom: 1rem;

align-items: center;

justify-content: center;

`

export default AppContentWrapper;