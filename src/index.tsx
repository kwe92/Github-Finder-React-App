import React,{StrictMode} from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AppGlobalTheme } from "./indexStyles";

const ele = document.getElementById("root") as HTMLElement;

const root = ReactDOM.createRoot(ele);

root.render(
    <StrictMode>
        <AppGlobalTheme/>
        <App/>
    </StrictMode>
);