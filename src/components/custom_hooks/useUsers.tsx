import React,{ useEffect, useState } from "react";
import {GITHUB_API_URL, GITHUB_API_TOKEN} from "../../private/ApiKey"
import axios from "axios";

export const useUser = () => {
    const [user, SetUser] = useState([]);

    const fetchUsers = async () => {
        const data = await axios.get(
             `${GITHUB_API_URL}/users`    
        ,
        { headers: {
            Authorization: GITHUB_API_TOKEN
        }});

        const result = data.data;

        SetUser(result);

    };

    useEffect(() => {fetchUsers()},[]);

    return [user, SetUser] as Array<Array<Object>>;
}