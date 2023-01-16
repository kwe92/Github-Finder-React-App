import React,{FunctionComponent} from "react";
import {FooterContentWrapper as FooterWraper, CopyrightContent, HashTag, Footer as StyledFooter, CopyrightIcon} from "./FooterStyles";


// TODO: Change the display of the footer based on viewport height for phone

const Footer: FunctionComponent = ({}): JSX.Element =>
        <StyledFooter>
            <FooterContent/>
        </StyledFooter>;

const FooterContent: FunctionComponent = (props:{}): JSX.Element => 
        <FooterWraper>
            <HashTag/>
            <CopyrightContent>Copyright <span><CopyrightIcon/></span> 2023 All rights reserved.</CopyrightContent>
        </FooterWraper>;

export default Footer;