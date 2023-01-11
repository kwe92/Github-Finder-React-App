import React, {FunctionComponent, MouseEventHandler} from "react";
import { NavigateFunction, useLocation, useNavigate } from "react-router-dom";
import { SetState } from "../../types/state/stateTypes";
import useRepos from "../custom_hooks/useRepos";
import useUser from "../custom_hooks/useUser";
import {MainContainer, TextIcon, ProfileImage, NameImageContainer,UserName, UserNameContainer, UserLogin, DescriptionContainer, NameContentContainer, UserBadge, Bio, Row, ProfileUrlButton, LocationInfoContainer, ListTile, ListTileContentTop, ListTileContentBottom, VerticalLine, IconListTileContainer, IconUsers, Column, HireableBadge, ImageDescriptionContainer, IconListTileContainerWrapper, MainInnerContainer, LogoIconVerticalLine} from "./UserStyles";

const User: FunctionComponent = (props:{}): JSX.Element => {
    
    const { state } = useLocation();

    const [user, setUser] = useUser(state);

    const [repos, setRepos] = useRepos(state);

    console.log("REPOS: ",repos);

    const repoListItems = repos.map((repo: any) => {
        return <li key ={repo["id"]}>{repo["name"]}</li>;
    });

    const navigate: NavigateFunction  = useNavigate();

    const handleBackHome: MouseEventHandler = () => navigate("/");

    // const handleToGithub: MouseEventHandler = () => {navigate("https://google.com")};

    console.log("From User Page: ",user, state, repos)
    

    return (
            <MainContainer>
                {/* Parse out into its own dive and margin auto? */}
                <MainInnerContainer>
                    <TextIcon type="button" onClick={handleBackHome}>BACK TO SEARCH</TextIcon>
                            
                            {/* Profile Image */}
                    <ImageDescriptionContainer>

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
                                {/* TODO: If hireable is null || hireable the badge is green else not hireable*/}
                                <HireableBadge>hireable</HireableBadge>

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

                    </ImageDescriptionContainer>

                <IconListTileContainerWrapper>
                        <IconListTileContainer>

                            <ListTile>
                                <ListTileContentTop>Followers</ListTileContentTop>
                                <ListTileContentBottom>{user["followers"]}</ListTileContentBottom>
                            </ListTile>

                            <IconUsers/>

                        </IconListTileContainer>

                        <LogoIconVerticalLine/>

                        <IconListTileContainer>

                            <ListTile>
                                <ListTileContentTop>Following</ListTileContentTop>
                                <ListTileContentBottom>{user["following"]}</ListTileContentBottom>
                            </ListTile>

                            <IconUsers/>

                        </IconListTileContainer>

                        <LogoIconVerticalLine/>

                        <IconListTileContainer>

                            <ListTile>
                                <ListTileContentTop>Public Repos</ListTileContentTop>
                                <ListTileContentBottom>{user["public_repos"]}</ListTileContentBottom>
                            </ListTile>

                            <IconUsers/>

                        </IconListTileContainer>

                        <LogoIconVerticalLine/>

                        <IconListTileContainer>

                                <ListTile>
                                    <ListTileContentTop>Public Gists</ListTileContentTop>
                                    <ListTileContentBottom>{user["public_gists"]}</ListTileContentBottom>
                                </ListTile>

                            <IconUsers/>

                        </IconListTileContainer>

                </IconListTileContainerWrapper>

            </MainInnerContainer>

            <h1 style={{color: "white"}}>Latest Repositories</h1>

            <ul style={{color: "white"}}>
                {repoListItems}
            </ul>

            </MainContainer>
    );
};

export default User;