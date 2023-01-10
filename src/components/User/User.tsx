import React, {FunctionComponent, MouseEventHandler} from "react";
import { NavigateFunction, useLocation, useNavigate } from "react-router-dom";
import useUser from "../custom_hooks/useUser";
import {MainContainer, TextIcon, ProfileImage, NameImageContainer,UserName, UserNameContainer, UserLogin, DescriptionContainer, NameContentContainer, UserBadge, Bio, Row, ProfileUrlButton, LocationInfoContainer, ListTile, ListTileContentTop, ListTileContentBottom, VerticalLine, IconListTileContainer, IconUsers, Column} from "./UserStyles";

const User: FunctionComponent = (props:{}): JSX.Element => {
    
    const { state } = useLocation();

    const [user, setUser] = useUser(state);

    const navigate: NavigateFunction  = useNavigate();

    const handleBackHome: MouseEventHandler = () => navigate("/");

    // const handleToGithub: MouseEventHandler = () => {navigate("https://google.com")};

    console.log("From User Page: ",user, state)

    return (
            <MainContainer>
                <TextIcon type="button" onClick={handleBackHome}>BACK TO SEARCH</TextIcon>
                    
                    {/* Profile Image */}
               <Row>

               <NameImageContainer>

                    <ProfileImage src={user["avatar_url"]}/>

                    <UserNameContainer>
                        <UserName>{user["name"]}</UserName>
                        <UserLogin>{user["login"]}</UserLogin>
                    </UserNameContainer>

                </NameImageContainer>

                <DescriptionContainer>

                    <NameContentContainer>
                        <UserName>{user["name"]}</UserName>
                        <UserBadge>{user["type"]}</UserBadge>
                    </NameContentContainer>

                    <Bio>
                        {user["bio"]}
                    </Bio>

                    <ProfileUrlButton href={user["html_url"]}>
                        VISIT GITHUB PROFILE
                    </ProfileUrlButton>

                    <LocationInfoContainer>
                        <ListTile>
                            <ListTileContentTop>Location</ListTileContentTop>
                            <ListTileContentBottom>San Antonio</ListTileContentBottom>
                        </ListTile>

                        <VerticalLine/>

                        <ListTile>
                            <ListTileContentTop>Website</ListTileContentTop>
                            <ListTileContentBottom>ayon.io</ListTileContentBottom>
                        </ListTile>

                        <VerticalLine/>


                        <ListTile>
                            <ListTileContentTop>Twitter</ListTileContentTop>
                            <ListTileContentBottom>AyonInnovations</ListTileContentBottom>
                        </ListTile>
                    </LocationInfoContainer>

                </DescriptionContainer>

               </Row>

               <Row>
                    <IconListTileContainer>

                        <ListTile>
                            <ListTileContentTop>Followers</ListTileContentTop>
                            <ListTileContentBottom>23</ListTileContentBottom>
                        </ListTile>

                        <IconUsers/>

                    </IconListTileContainer>

                    <VerticalLine/>

                    <IconListTileContainer>

                        <ListTile>
                            <ListTileContentTop>Followers</ListTileContentTop>
                            <ListTileContentBottom>23</ListTileContentBottom>
                        </ListTile>

                        <IconUsers/>

                    </IconListTileContainer>

                    <VerticalLine/>

                    <IconListTileContainer>

                        <ListTile>
                            <ListTileContentTop>Followers</ListTileContentTop>
                            <ListTileContentBottom>23</ListTileContentBottom>
                        </ListTile>

                        <IconUsers/>

                    </IconListTileContainer>

                    <VerticalLine/>

                    <IconListTileContainer>

                            <ListTile>
                                <ListTileContentTop>Followers</ListTileContentTop>
                                <ListTileContentBottom>23</ListTileContentBottom>
                            </ListTile>

                        <IconUsers/>

                    </IconListTileContainer>

               </Row>

            </MainContainer>
    );
};

export default User;