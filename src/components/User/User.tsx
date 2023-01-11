import React, {FunctionComponent, MouseEventHandler} from "react";
import { NavigateFunction, useLocation, useNavigate } from "react-router-dom";
import { SetState } from "../../types/state/stateTypes";
import useRepos from "../custom_hooks/useRepos";
import useUser from "../custom_hooks/useUser";
import {MainContainer, TextIcon, ProfileImage, NameImageContainer,UserName, UserNameContainer, UserLogin, DescriptionContainer, NameContentContainer, UserBadge, Bio, Row, ProfileUrlButton, LocationInfoContainer, ListTile, ListTileContentTop, ListTileContentBottom, VerticalLine, IconListTileContainer, IconUsers, Column, HireableBadge, ImageDescriptionContainer, IconListTileContainerWrapper, MainInnerContainer, LogoIconVerticalLine, ListTileRepoContaner, ListTileRepoItem, BadgeRow, IconBadge, IconUserFriends, IconBox, IconInBox, IconEye, IconStar, IconInfo, IconFork, IconListTileRepo, IconLink, RepoTitle, RepoHeader} from "./UserStyles";

// TODO: Replace all the duplicate icons
// TODO: Fix the footer not completely disappearing
// TODO: Make navbar and footer disapear on user scroll down??
// TODO: Fix alignment of middle section icons when the display is changed to grid
// TODO: Finish styling the badges for the user page
// TODO: Handle navigation onClick to the respecting clicked upon repository named in the ListTile
// TODO: Look for other UI errors and clean code errors
// TODO: Change <a> redirect to a new tab
// TODO: Round the IconBadgeContainer and add a little padding to it

const User: FunctionComponent = (props:{}): JSX.Element => {
    
    const { state } = useLocation();

    const [user, setUser] = useUser(state);

    const [repos, setRepos] = useRepos(state);

    console.log("User: ",user);
    console.log("REPOS: ",repos);
    console.log("Watchers_count: ",repos["watchers_count"]);


    const repoListItems = repos.map((repo: any) => {
        return <li key ={repo["id"]}>
            <ListTileRepoItem>

                <IconListTileRepo href={repo["html_url"]}>

                    <IconLink/>
                    <RepoTitle>
                        {repo["name"]}
                    </RepoTitle>

                </IconListTileRepo>
                <BadgeRow>
                    
                    <IconBadge primary={"#00b0ff"} secondary = {"rgba(0, 176, 255, 0.2)"}>
                        <IconEye/>
                        <p>{repo["watchers_count"]}</p>
                    </IconBadge>

                    <IconBadge>
                        <IconStar/>
                        <p>{repo["stargazers_count"]}</p>
                    </IconBadge>

                    <IconBadge>
                        <IconInfo/>
                        <p>{repo["open_issues_count"]}</p>
                    </IconBadge>

                    <IconBadge>
                        <IconFork/>
                        <p>{repo["forks_count"]}</p>
                    </IconBadge>

                </BadgeRow>

            </ListTileRepoItem>
        </li>;
    });

    const navigate: NavigateFunction  = useNavigate();

    const handleBackHome: MouseEventHandler = () => navigate("/");

    // const handleToGithub: MouseEventHandler = () => {navigate("https://google.com")};

    console.log("From User Page: ",user, state, repos)
    

    return (
            <MainContainer>
                {/* Parse out into its own dive and margin auto? */}
                <MainInnerContainer>
                    {/* <TextIcon type="button" onClick={handleBackHome}>BACK TO SEARCH</TextIcon> */}
                            
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

                            <IconUserFriends/>

                        </IconListTileContainer>

                        <LogoIconVerticalLine/>

                        <IconListTileContainer>

                            <ListTile>
                                <ListTileContentTop>Public Repos</ListTileContentTop>
                                <ListTileContentBottom>{user["public_repos"]}</ListTileContentBottom>
                            </ListTile>

                            <IconBox/>

                        </IconListTileContainer>

                        <LogoIconVerticalLine/>

                        <IconListTileContainer>

                                <ListTile>
                                    <ListTileContentTop>Public Gists</ListTileContentTop>
                                    <ListTileContentBottom>{user["public_gists"]}</ListTileContentBottom>
                                </ListTile>

                            <IconInBox/>

                        </IconListTileContainer>

                </IconListTileContainerWrapper>

            </MainInnerContainer>

            <RepoHeader>Latest Repositories</RepoHeader>

            <ListTileRepoContaner>
                {repoListItems}
            </ListTileRepoContaner>

            </MainContainer>
    );
};

export default User;