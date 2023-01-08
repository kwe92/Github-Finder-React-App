import React, { useState } from "react";
import { SetState } from "../../types/state/stateTypes";
import { UserResults } from "../user_results/UserResults";
import UserSearch from "../user_search/UserSearch";

const Home = (props:{}): JSX.Element => 
            {
                const [userInput, setUserInput]: [string, SetState<string>] = useState("");
                console.log("User Input",userInput)
            return (
            <>
            <UserSearch setSearch = {setUserInput}/>
            {userInput.trim() && <UserResults searchResults={userInput}/>}
            </>
            );
            };


export default Home;
