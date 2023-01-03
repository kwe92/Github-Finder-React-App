import process from "process";
import React from "react";

export const Notfound = (props:{}) => {
    return(
        <div style={{color:"white", textAlign:"center"}}>
            404- Page Not Found
            {/* {process.env.REACT_APP_GITHUB_API_TOKEN} */}
        </div>
    );
};