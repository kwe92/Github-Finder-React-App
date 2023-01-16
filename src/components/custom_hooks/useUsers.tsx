import React,{ useEffect, useState } from "react";
import {GITHUB_API_URL, GITHUB_API_TOKEN} from "../../private/ApiKey"
import axios from "axios";
import { SetState } from "../../types/state/stateTypes";

const useUsers: Function = (serchResults: string): [object[], SetState<[]>] => {
    const [user, setUsers]: [[], SetState<[]>] = useState([]);

    // console.log(serchResults);

    const fetchUsers = async () => {
        const data = await axios.get(
             `${GITHUB_API_URL}/search/users?q=${serchResults}`    
        ,
        { headers: {
            Authorization: GITHUB_API_TOKEN
        }});

        // console.log("Date From useUsers",data.data.items);

        console.log("Date From useUsers",data);

        data.request.ontimeout(() => {
            console.log("TIMEOUT")
        });


        const result = data.data.items;

        setUsers(result);

    };

    useEffect(() => {fetchUsers()},[serchResults]);

    return [user, setUsers];

};

export default useUsers;