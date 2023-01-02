import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"

const ele = document.getElementById("root") as HTMLElement;

const root = ReactDOM.createRoot(ele);

root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
)