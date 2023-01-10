import React, {FunctionComponent} from "react";
import { useLocation } from "react-router-dom";
import useUser from "../custom_hooks/useUser";

const User: FunctionComponent = (props:{}): JSX.Element => {
    
    const { state } = useLocation();
    
    const [user, setUser] = useUser(state);

    console.log("From User Page: ",user, state)

    return <div style = {{color: "white"}}>{ user["name"] }</div>
};

export default User;