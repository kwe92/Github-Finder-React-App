import React, {Key} from "react";
import { useUser } from "../custom_hooks/useUsers";
import { GridWrapper } from "./UserResultsStyles";

export const UserResults = (props:{}) => {
    const [user, SetUser] = useUser();
    const userList =
        user.map((user: any, index: Key) => <h3 key={index}>{user["login"]}</h3>);

    return(
       <GridWrapper>
            {userList}
    </GridWrapper>
    );
};