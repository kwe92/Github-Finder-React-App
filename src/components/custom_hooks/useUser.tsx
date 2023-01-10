import React,{ useEffect, useState } from "react";
import {GITHUB_API_URL, GITHUB_API_TOKEN} from "../../private/ApiKey"
import axios from "axios";
import { SetState } from "../../types/state/stateTypes";

const useUser: Function = (selectedUser: string): [object[], SetState<[]>] => {
    const [user, SetUser]: [[], SetState<[]>] = useState([]);

    console.log(user);

    const fetchUser = async () => {
        const data = await axios.get(
             `${GITHUB_API_URL}/users/${selectedUser}`    
        ,
        { headers: {
            Authorization: GITHUB_API_TOKEN
        }});

        console.log("Data: ", data.data);

        const result = data.data;

        SetUser(result);

    };

    useEffect(() => {fetchUser()},[selectedUser]);

    return [user, SetUser];

};

export default useUser;