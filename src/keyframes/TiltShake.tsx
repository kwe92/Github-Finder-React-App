
import { Keyframes, keyframes } from "styled-components";

// TODO: Review!!!

export const tiltShake: Keyframes = keyframes`
    0% { transform: rotate(0deg); }
    25% { transform: rotate(1.875deg); }
    50% { transform: rotate(0eg); }
    75% { transform: rotate(-1.875deg); }
    100% { transform: rotate(0deg); }
`;