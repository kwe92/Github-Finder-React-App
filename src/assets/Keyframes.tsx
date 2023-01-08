import { Keyframes, keyframes } from "styled-components";

const rotate: Keyframes = keyframes`
from{
    transform: rotate(0deg);
}

to{
    transform: rotate(360deg);
}
`;

export default rotate;