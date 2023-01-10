import React, {FunctionComponent} from "react";
import {AboutContentWrapper, Title, ContentBody, ContainerWrapper, ContentContainer} from './AboutStyles';

const About: FunctionComponent = (props:{}): JSX.Element => 
        <AboutContentWrapper>
            <Title>Github Finder</Title>
            <ContentBody>A React app to search github profiles and see profile details.</ContentBody>
            {version}
            {developer}
            {mainTech}
        </AboutContentWrapper>;

// Implementation Details

const content: {name: string; content: string;}[] = [{name:"Version", content:"1.0.0"},{name:"Developed By:", content:"Kweayon Clark"},{name:"Main Technology Used:", content:"Styled Components && Typescript"}];
    
const [version, developer, mainTech]: JSX.Element[] = content.map((content)=>
    <ContainerWrapper>
        <ContentContainer>
            {content["name"]} 
        </ContentContainer>
        <ContentContainer secondary>
            {content["content"]}
        </ContentContainer>
    </ ContainerWrapper>
    );

export default About;