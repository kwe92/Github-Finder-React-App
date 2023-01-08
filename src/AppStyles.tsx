import styled from "styled-components";
import { ContainerType } from "./types/state/styled_component/types";

const AppContentWrapper: ContainerType<{}> = styled.div`

    height: 100vh;

    width: 100vw;

    display: flex;

    flex-direction: column;

`;

export const Container: ContainerType<{}> = styled.div`

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