import {
  createGlobalStyle,
  GlobalStyleComponent,
  DefaultTheme,
} from "styled-components";
import { ReactNode, ReactElement } from "react";

// Styled COmponent Helper Funtion to create a base global style.

export const AppGlobalTheme: GlobalStyleComponent<
  {},
  DefaultTheme
> = createGlobalStyle`

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
