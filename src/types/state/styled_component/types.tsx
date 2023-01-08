import styled, {StyledComponent} from "styled-components";

export type ContainerType<T extends object> = StyledComponent<"div", any, T, never>;

export type ImageType<T extends object> = StyledComponent<"img", any, T, never>;
