import React from "react";
import {FooterContentWrapper as FooterWraper, CopyrightContent, HashTag, Footer as StyledFooter, CopyrightIcon} from "./FooterStyles";

const Footer = (props:{}) => {

    const footerContent = 
        <FooterWraper>
            <HashTag/>
            <CopyrightContent>Copyright <span><CopyrightIcon/></span> 2023 All rights reserved.</CopyrightContent>
        </FooterWraper>

    const footer =  
        <StyledFooter>
            {footerContent}
        </StyledFooter>;

    return footer;
};

export default Footer;