import styled from "styled-components";
import { TypeStyledComponent } from "../../types/styled_component/types";

const Row: TypeStyledComponent<"div", {}> = styled.div`
    
    display: flex;

    `;

const Column: TypeStyledComponent<"div", {}> = styled.div`
    
    display: flex;
    
    flex-direction: column;
    
    `;

export {Row, Column};