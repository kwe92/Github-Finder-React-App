import { FunctionComponent } from "react";
import spinner from "./spinner.png"
import { SpinnerContainer,SpinnerImage } from "./SpinnerStyles";

export const Spinner: FunctionComponent<{}> = (props:{}) => 
        <SpinnerContainer>
                <SpinnerImage src={spinner}/>
        </SpinnerContainer>;