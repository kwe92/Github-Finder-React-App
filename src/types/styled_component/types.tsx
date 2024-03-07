import styled, { StyledComponent } from "styled-components";
import { ComponentType } from "react";

// Generic Type Alias for Styled Components
export type TypeStyledComponent<
  S extends ComponentType<any> | keyof JSX.IntrinsicElements,
  T extends object
> = StyledComponent<S, any, T, never>;
