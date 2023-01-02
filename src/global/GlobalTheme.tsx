import React, {ReactNode} from "react";
import { AppGlobalTheme } from "./indexStyles";

// TODO: Fix
interface _props{
    children: ReactNode,
};

export const GlobalTheme = (props:_props) => {
    return(
        <AppGlobalTheme>
            {props.children}
        </AppGlobalTheme>
    )
};