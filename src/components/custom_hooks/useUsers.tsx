import React,{ useEffect, useState } from "react";
import {GITHUB_API_URL, GITHUB_API_TOKEN} from "../../private/ApiKey"
import axios from "axios";

const useUser: Function = () => {
    const [user, SetUser] = useState([]);

    const fetchUsers = async () => {
        const data = await axios.get(
             `${GITHUB_API_URL}/search/users?q=kw`    
        ,
        { headers: {
            Authorization: GITHUB_API_TOKEN
        }});

        console.log(data);

        const result = data.data.items;

        SetUser(result);

    };

    useEffect(() => {fetchUsers()},[]);

    return [user, SetUser] as Array<Array<object>>;

};

export default useUser;