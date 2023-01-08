import React from "react";
import {ListTile, UserAvatarIcon, UserImageContainer, ContentContainer, Username, ViewProfile} from "./UserItemStyles";

interface Props  {
    user: {login: string; avatar_url: string;}
};

export const UserItem = (props:Props) =>

    <ListTile>
        <UserImageContainer>
            <UserAvatarIcon src={props.user.avatar_url}/>
        </UserImageContainer>
        <ContentContainer>
            <Username>
                {props.user.login}
            </Username>
            <ViewProfile to={`/users/${props.user.login}`}>
                View Profile
            </ViewProfile>
        </ContentContainer>
        </ListTile>;