import React,{ useEffect, useState } from "react";
import axios from "axios";
import { SetState } from "../../types/state/stateTypes";

const useUsers: Function = (serchResults: string): [object[], SetState<[]>] => {
    const [users, setUsers]: [[], SetState<[]>] = useState([]);
    
    const instance = axios.create({
        baseURL: `${process.env.REACT_APP_GITHUB_API_URL}`,
        timeout: 3000,
      });

    // console.log(serchResults);

    const fetchUsers = async () => {
        const data = await instance.get(
             `search/users?q=${serchResults}`    
        ,
        { headers: {
            Authorization: process.env.REACT_APP_GITHUB_API_TOKEN
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

    return [users, setUsers];

};

export default useUsers;