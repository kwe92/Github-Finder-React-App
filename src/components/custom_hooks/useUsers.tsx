import React,{ useEffect, useState } from "react";
import {GITHUB_API_URL, GITHUB_API_TOKEN} from "../../private/ApiKey"
import axios from "axios";
import { SetState } from "../../types/state/stateTypes";

const useUser: Function = (serchResults: string): [object[], SetState<[]>] => {
    const [user, SetUser]: [[], SetState<[]>] = useState([]);

    console.log(serchResults);

    const fetchUsers = async () => {
        const data = await axios.get(
             `${GITHUB_API_URL}/search/users?q=${serchResults}`    
        ,
        { headers: {
            Authorization: GITHUB_API_TOKEN
        }});

        console.log(data);

        const result = data.data.items;

        SetUser(result);

    };

    useEffect(() => {fetchUsers()},[serchResults]);

    return [user, SetUser];

};

export default useUser;