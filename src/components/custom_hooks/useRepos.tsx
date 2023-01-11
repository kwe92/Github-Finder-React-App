import React,{ useEffect, useState } from "react";
import {GITHUB_API_URL, GITHUB_API_TOKEN} from "../../private/ApiKey"
import axios from "axios";
import { SetState } from "../../types/state/stateTypes";

const useRepos: Function = (selectedUser: string): [object[], SetState<[]>] => {
    const [repos, setRepos]: [[], SetState<[]>] = useState([]);

    console.log(repos);

    const fetchUser = async () => {

        //TODO: write down how to use  URL search params IN DEPTH 
        const params = new URLSearchParams("q=URLUtils.searchParams&sort=created&per_page=10");

        
        const data = await axios.get(
             `${GITHUB_API_URL}/users/${selectedUser}/repos?${params}`    
        ,
        { headers: {
            Authorization: GITHUB_API_TOKEN
        }});

        // console.log("Repos: ", data);

        const result = data.data;

        setRepos(result);

    };

    useEffect(() => {fetchUser()},[selectedUser]);

    return [repos, setRepos];

};

export default useRepos;