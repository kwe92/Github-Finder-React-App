import React,{ useEffect, useState } from "react";
import axios from "axios";
import { SetState } from "../../types/state/stateTypes";

const useUser: Function = (selectedUser: string): [object[], SetState<[]>] => {
    const [user, setUser]: [[], SetState<[]>] = useState([]);

    // const instance = axios.create({
    //     baseURL: '',
    //     timeout: 3000,
    //     headers: {'X-Custom-Header': ''}
    //   });

    // console.log(user);

    const fetchUser = async () => {
        const data = await axios.get(
             `${process.env.REACT_APP_GITHUB_API_URL}/users/${selectedUser}`    
        ,
        { headers: {
            Authorization: process.env.REACT_APP_GITHUB_API_TOKEN
        }});

        console.log("Data: ", data.data);

        const result = data.data;

        setUser(result);

    };

    useEffect(() => {fetchUser()},[selectedUser]);

    return [user, setUser];

};

export default useUser;