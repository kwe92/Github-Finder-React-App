import styled from "styled-components";
import { TypeStyledComponent } from "./types/styled_component/types";
import { Column } from "./components/global/BaseFlex";

const AppContentWrapper: TypeStyledComponent< "div",{setFooter: boolean}> = styled.div<{setFooter: boolean}>`

    height: 100vh;

    //TODO: Continue working on disapearing footer

    height: ${(props) => props.setFooter ? "auto" : "100vh"};

    // height: 100vh;

    width: 100vw;

    display: flex;

    flex-direction: column;

`;

export const Container = styled(Column)`

padding-top: 6rem;

gap: 1rem;

height: 85%;

padding-bottom: 1rem;

align-items: center;

justify-content: center;

`

export default AppContentWrapper;