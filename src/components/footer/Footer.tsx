import React,{FunctionComponent} from "react";
import {FooterContentWrapper as FooterWraper, CopyrightContent, HashTag, Footer as StyledFooter, CopyrightIcon} from "./FooterStyles";

const Footer: FunctionComponent = (props:{}) =>
        <StyledFooter>
            <FooterContent/>
        </StyledFooter>;

const FooterContent: FunctionComponent = (props:{}) => 
        <FooterWraper>
            <HashTag/>
            <CopyrightContent>Copyright <span><CopyrightIcon/></span> 2023 All rights reserved.</CopyrightContent>
        </FooterWraper>;

export default Footer;