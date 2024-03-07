import React, { FunctionComponent, MouseEventHandler, useEffect } from "react";
import { NavigateFunction, useLocation, useNavigate } from "react-router-dom";
import useRepos from "../custom_hooks/useRepos";
import useUser from "../custom_hooks/useUser";
import {
  MainContainer,
  ProfileImage,
  ButtonImageContainer,
  UserName,
  UserLogin,
  DescriptionContainer,
  NameContentContainer,
  Bio,
  ProfileUrlButton,
  LocationInfoContainer,
  ListTile,
  ListTileContentTop,
  ListTileContentBottom,
  VerticalLine,
  IconListTileContainer,
  IconUsers,
  ImageDescriptionContainer,
  IconListTileContainerWrapper,
  MainInnerContainer,
  LogoIconVerticalLine,
  ListTileRepoContaner,
  ListTileRepoItem,
  BadgeRow,
  IconBadge,
  IconUserFriends,
  IconBox,
  IconInBox,
  IconEye,
  IconStar,
  IconInfo,
  IconFork,
  IconListTileRepo,
  IconLink,
  RepoTitle,
  RepoHeader,
} from "./UserStyles";

// TODO: Adding margin-left to description section between the profile and the bio
// TODO: Move Website up somewhere else, it takes up alot of space for some users
// TODO: Fix Static Location Data!!
// TODO: Fix the footer not completely disappearing
// TODO: Make navbar and footer disapear on user scroll down??
// TODO: Fix alignment of middle section icons when the display is changed to grid
// TODO: Finish styling the badges for the user page
// TODO: Look for other UI errors and clean code errors
// TODO: Change <a> redirect to a new tab
// TODO: Add user Contributions per repo of top repos | EXAMPLE: https://api.github.com/repos/kwe92/VueMix-React-App/contributors?anon=1

interface Props {
  setFooter: Function;
}

const User: FunctionComponent<Props> = (props: Props): JSX.Element => {
  const { state } = useLocation();

  const [user] = useUser(state);

  console.log("User Data: ", user);

  const [repos] = useRepos(state);

  // Attach the scroll listener to the div
  useEffect(() => {
    props.setFooter(true);
  }, []);

  console.log("User: ", user);
  console.log("REPOS: ", repos);
  console.log("Watchers_count: ", repos["watchers_count"]);

  const repoListItems = repos.map((repo: any) => {
    return (
      <li key={repo["id"]}>
        <ListTileRepoItem>
          <IconListTileRepo href={repo["html_url"]} target="_blank">
            <IconLink />
            <RepoTitle>{repo["name"]}</RepoTitle>
          </IconListTileRepo>
          <BadgeRow>
            <IconBadge primary={"#00b0ff"} secondary={"rgba(0, 176, 255, 0.2)"}>
              <IconEye />
              <p>{repo["watchers_count"]}</p>
            </IconBadge>

            <IconBadge primary={"#fcf300"} secondary={"rgba(252, 243, 0, 0.2)"}>
              <IconStar />
              <p>{repo["stargazers_count"]}</p>
            </IconBadge>

            <IconBadge primary={"#dc2f02"} secondary={"rgba(220, 47, 2, 0.2)"}>
              <IconInfo />
              <p>{repo["open_issues_count"]}</p>
            </IconBadge>

            <IconBadge primary={"#007f5f"} secondary={"rgba(0, 127, 95, 0.2)"}>
              <IconFork />
              <p>{repo["forks_count"]}</p>
            </IconBadge>
          </BadgeRow>
        </ListTileRepoItem>
      </li>
    );
  });

  const navigate: NavigateFunction = useNavigate();

  const handleBackHome: MouseEventHandler = () => navigate("/");

  console.log("From User Page: ", user, state, repos);

  return (
    <MainContainer>
      {/* Parse out into its own div and margin auto? */}
      <MainInnerContainer>
        {/* <TextIcon type="button" onClick={handleBackHome}>BACK TO SEARCH</TextIcon> */}

        {/* Profile Image */}
        <ImageDescriptionContainer>
          <ButtonImageContainer>
            {/* <div style={{display: "flex"}}> */}
            <ProfileImage src={user["avatar_url"]} />
            {/* </div> */}

            <ProfileUrlButton href={user["html_url"]} target="_blank">
              VISIT GITHUB PROFILE
            </ProfileUrlButton>
          </ButtonImageContainer>

          <DescriptionContainer>
            <NameContentContainer>
              <UserName>
                {user["name"] ? user["name"] : "IhaveNoUserName"}
              </UserName>
              <UserLogin>{user["login"]}</UserLogin>

              <IconBadge
                primary={"#00b0ff"}
                secondary={"rgba(0, 176, 255, 0.2)"}
              >
                {user["type"]}
              </IconBadge>

              {/* TODO: If hireable is null || hireable the badge is green else not hireable*/}
              <IconBadge
                primary={"#007f5f"}
                secondary={"rgba(0, 127, 95, 0.2)"}
              >
                hireable
              </IconBadge>
            </NameContentContainer>

            <Bio>
              {user["bio"] ? user["bio"] : "Nothing to write home about."}
            </Bio>

            {/* <ProfileUrlButton href={user["html_url"]} target="_blank">
                                VISIT GITHUB PROFILE
                            </ProfileUrlButton> */}

            <LocationInfoContainer>
              <ListTile>
                <ListTileContentTop>Location</ListTileContentTop>
                {user["location"] ? (
                  <ListTileContentBottom>
                    {user["location"]}
                  </ListTileContentBottom>
                ) : (
                  <ListTileContentBottom>{"N/A"}</ListTileContentBottom>
                )}
              </ListTile>

              <VerticalLine />

              <ListTile>
                <ListTileContentTop>Website</ListTileContentTop>
                {user["blog"] ? (
                  <ListTileContentBottom>{user["blog"]}</ListTileContentBottom>
                ) : (
                  <ListTileContentBottom>{"N/A"}</ListTileContentBottom>
                )}
              </ListTile>

              <VerticalLine />

              <ListTile>
                <ListTileContentTop>Twitter</ListTileContentTop>
                {user["twitter_username"] ? (
                  <ListTileContentBottom>
                    {user["twitter_username"]}
                  </ListTileContentBottom>
                ) : (
                  <ListTileContentBottom>{"N/A"}</ListTileContentBottom>
                )}
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

            <IconUsers />
          </IconListTileContainer>

          <LogoIconVerticalLine />

          <IconListTileContainer>
            <ListTile>
              <ListTileContentTop>Following</ListTileContentTop>
              <ListTileContentBottom>{user["following"]}</ListTileContentBottom>
            </ListTile>

            <IconUserFriends />
          </IconListTileContainer>

          <LogoIconVerticalLine />

          <IconListTileContainer>
            <ListTile>
              <ListTileContentTop>Public Repos</ListTileContentTop>
              <ListTileContentBottom>
                {user["public_repos"]}
              </ListTileContentBottom>
            </ListTile>

            <IconBox />
          </IconListTileContainer>

          <LogoIconVerticalLine />

          <IconListTileContainer>
            <ListTile>
              <ListTileContentTop>Public Gists</ListTileContentTop>
              <ListTileContentBottom>
                {user["public_gists"]}
              </ListTileContentBottom>
            </ListTile>

            <IconInBox />
          </IconListTileContainer>
        </IconListTileContainerWrapper>
      </MainInnerContainer>

      <RepoHeader>Latest Repositories</RepoHeader>

      <ListTileRepoContaner>{repoListItems}</ListTileRepoContaner>
    </MainContainer>
  );
};

export default User;
