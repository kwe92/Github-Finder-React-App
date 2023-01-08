import React, {FunctionComponent} from "react";
import {AboutContentWrapper, Title, ContentBody, ContainerWrapper, ContentContainer} from './AboutStyles';


const About: FunctionComponent = (props:{}) => {

    return (
        <AboutContentWrapper>
            <Title>Github Finder</Title>
            <ContentBody>A React app to search GitHub profiles and see profile details.</ContentBody>;
            {version}
            {developer}
            {mainTech}
        </AboutContentWrapper>
    );
};

const content = [{name:"Version", content:"1.0.0"},{name:"Developed By:", content:"Kweayon Clark"},{name:"Main Technology Used:", content:"Styled Components && Typescript"}];
    
const [version, developer, mainTech]: Array<JSX.Element> = content.map((content)=>
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