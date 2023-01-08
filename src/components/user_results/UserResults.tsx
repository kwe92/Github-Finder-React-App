import React, {Key, useEffect, useState} from "react";
import useUser  from "../custom_hooks/useUsers";
import { GridWrapper } from "./UserResultsStyles";
import { Spinner } from "../../assets/Spinner";
import { UserItem } from "../user_item/UserItem";


export const UserResults = (props:{}) => {

    const [users, setUser] = useUser();

    const [isLoading, setIsLoading] = useState(true);

    const initState = () => {
        setIsLoading(false);
    };

    useEffect(initState,[]);

    const userList: Array<JSX.Element> =
        users.map((user: any, index: Key) => <UserItem key={user["id"]} user={user}/>);

        //TODO: Display based on based on user input
        // return ( null
         
        // );

        return isLoading || users.length === 0 ?
        <GridWrapper isLoading = {true}>
            <Spinner/>
        </GridWrapper> 
        : 
        <GridWrapper isLoading = {isLoading}>
            {userList}
        </GridWrapper>;

       
        
};