import { stat } from "fs";
import React, { useState, FunctionComponent, useEffect } from "react";
import { SetState } from "../../types/state/stateTypes";
import { UserResults } from "../user_results/UserResults";
import UserSearch from "../user_search/UserSearch";
import { ErrorMessage } from "./HomeStyles";

interface Props{
    setFooter: Function;
}

const Home: FunctionComponent<Props>  = (props:Props): JSX.Element => 
            {
                const [userInput, setUserInput]: [string, SetState<string>] = useState("");

                const [error, setError]: [boolean, SetState<boolean>] = useState(false);

                useEffect(() => {
                    props.setFooter(false);
                });

                const setState = (state: string, error: boolean) => 
                    {
                        setUserInput(state);
                        setError(error);
                    };

                console.log("User Input",userInput)

            return (
                <>
            <div style={{display:"flex", flexDirection: "column", alignItems: "center"
        }}>
            {error && <ErrorMessage>Please enter a name</ErrorMessage>}
            <UserSearch setSearch = {setState}/>
            </div>
            {userInput.trim() && <UserResults searchResults={userInput}/>}
                </>
            );
            };


export default Home;
