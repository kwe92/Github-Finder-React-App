import React, {Key, useEffect, useState} from "react";
import useUser  from "../custom_hooks/useUsers";
import { GridWrapper } from "./UserResultsStyles";
import { Spinner } from "../../assets/Spinner";
import { UserItem } from "../user_item/UserItem";
import { SetState } from "../../types/state/stateTypes";



export const UserResults = (props:{searchResults: string}): JSX.Element => {
    
    const [users, setUser]: [object[], SetState<[]>] = useUser(props.searchResults);

    const [isLoading, setIsLoading]: [boolean, SetState<boolean>] = useState(true);

    const initState = () => {
        setIsLoading(false);
    };

    useEffect(initState,[]);

    const userList: Array<JSX.Element> =
        users.map((user: any, index: Key) => <UserItem key={user["id"]} user={user}/>);

        
        return isLoading || users.length === 0 ?
        <GridWrapper isLoading = {true}>
            <Spinner/>
        </GridWrapper> 
        : 
        <GridWrapper isLoading = {isLoading}>
            {userList}
        </GridWrapper>;
};