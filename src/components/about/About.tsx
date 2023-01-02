import React from "react";
import {AboutContentWrapper, Title, ContentBody, ContainerWrapper, ContentContainer} from './AboutStyles';

const About = (props:{}) => {

    const title = 
        <Title>Github Finder</Title>;

    const content = [{name:"Version", content:"1.0.0"},{name:"Developed By:", content:"Kweayon Clark"},{name:"Main Technology Used:", content:"Styled Components && Typescript"}];
    
    const [version, developer, mainTech] = content.map((content)=>
        <ContainerWrapper>
            <ContentContainer>
                {content["name"]} 
            </ContentContainer>
            <ContentContainer Secondary>
                {content["content"]}
            </ContentContainer>
        </ ContainerWrapper>
        );


    const contentBody = 
        <ContentBody>A React app to search GitHub profiles and see profile details.</ContentBody>;

    return (
        <AboutContentWrapper>
            {title}
            {contentBody}
            {version}
            {developer}
            {mainTech}
        </AboutContentWrapper>
    );
};

export default About;