import {createGlobalStyle} from "styled-components";
import {ReactNode} from "react"

interface _props{
    children?: ReactNode,
};

export const AppGlobalTheme = createGlobalStyle<_props>`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
    
        font-family: Roboto;
        background: #191d24;

    }

    li {
        list-style: none;
    }

`;
