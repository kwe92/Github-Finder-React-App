import spinner from "./spinner.png"
import { SpinnerContainer,SpinnerImage } from "./SpinnerStyles";

export const Spinner = (props:{}) => {
    return(
        <SpinnerContainer>
        <SpinnerImage src={spinner}></SpinnerImage>
        </SpinnerContainer>
        );
};