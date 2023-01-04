import React from "react";
import {ListTile, UserAvatarIcon, UserImageContainer, ContentContainer, Username, ViewProfile} from "./UserItemStyles";

interface _props{
    user: {login: string, avatar_url: string}
}

export const UserItem = (props:_props) => {

    const username = props.user.login;

    return <ListTile>

        <UserImageContainer>
            <UserAvatarIcon src={props.user.avatar_url}/>
        </UserImageContainer>

        <ContentContainer>
            <Username>
                {username}
            </Username>

            <ViewProfile to={`/users/${username}`}>
                View Profile
            </ViewProfile>

        </ContentContainer>

        </ListTile>;
};