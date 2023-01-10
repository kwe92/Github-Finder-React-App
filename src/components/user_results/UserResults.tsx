import React, {EffectCallback, FunctionComponent, Key, useEffect, useState} from "react";
import useUsers  from "../custom_hooks/useUsers";
import { GridWrapper } from "./UserResultsStyles";
import { Spinner } from "../../assets/Spinner";
import { UserItem } from "../user_item/UserItem";
import { SetState } from "../../types/state/stateTypes";

interface Props {
    searchResults: string
};


export const UserResults: FunctionComponent<Props> = (props:Props): JSX.Element => {
    
    const [users, setUsers]: [object[], SetState<[]>] = useUsers(props.searchResults);

    const [isLoading, setIsLoading]: [boolean, SetState<boolean>] = useState(true);

    const initState: EffectCallback = () => 
        setIsLoading(false);

    useEffect(initState,[]);

    const userList: JSX.Element[] =
        users.map((user: any, index: Key) => <UserItem key={user["id"]} user={user}/>);

        
        return (
                isLoading || users.length === 0 ?
                <Spinner/>
                : 
                <GridWrapper isLoading = {isLoading}>
                    {userList}
                </GridWrapper>
            );
};