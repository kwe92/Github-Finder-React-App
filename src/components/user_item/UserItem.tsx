import React, { FunctionComponent, MouseEventHandler } from "react";
import { useNavigate, useNavigation } from "react-router-dom";
import {ListTile, UserAvatarIcon, UserImageContainer, ContentContainer, Username, ViewProfile, ViewProfile2} from "./UserItemStyles";


interface Props  {
    user: {login: string; avatar_url: string;}
};

export const UserItem: FunctionComponent<Props> = (props:Props): JSX.Element =>

    {
        const navigate = useNavigate();

        const profileHandler: MouseEventHandler<HTMLDivElement> = (): void =>
            navigate(`/user/${props.user.login}`, {state: props.user.login});

        return (
            <ListTile>
                <UserImageContainer>
                    <UserAvatarIcon src={props.user.avatar_url}/>
                </UserImageContainer>
                <ContentContainer>
                    <Username>
                        {props.user.login}
                    </Username>
                    <ViewProfile2 onClick={profileHandler}>
                        View Profile
                    </ViewProfile2>
                </ContentContainer>
                </ListTile>
        );
    };