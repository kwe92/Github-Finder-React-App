import process from "process";
import React, {FunctionComponent, MouseEventHandler} from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { Container404, ErrorTitle, IconButtonContainer, IconHouse, IconText, ErrorContent} from "./NotFoundStyles";

interface Props{};

export const Notfound: FunctionComponent = (props:Props): JSX.Element => 
       { 
        const navigator: NavigateFunction = useNavigate();

        const handleToHome: MouseEventHandler<HTMLDivElement> = (): void =>
            navigator("/");

        return (
                <Container404>
                    <ErrorTitle>Oops!</ErrorTitle>
                    <ErrorContent>404 - Page Not Found!</ErrorContent>
                    <IconButtonContainer onClick={handleToHome}>
                        <IconHouse/>
                    <IconText>back Home</IconText>
                    </IconButtonContainer>
                </Container404>
        );
    };