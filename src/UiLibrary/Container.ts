import styled from "styled-components";
import { IContainer } from "../types/common";
export const Container = styled.div`
  display: flex;
  align-items: ${(props: IContainer) =>
    props.centerAlign ? "center" : "flex-start"};
  justify-content: ${(props: IContainer) =>
    props.centerJustify ? "center" : "flex-start"};
  flex-direction: ${(props: IContainer) => props.flexDirection};
  flex-wrap: ${(props: IContainer) => props.flexWrap};
  border-width: ${(props: IContainer) => props.borderWidth};
  border-style: ${(props: IContainer) => props.borderStyle};
  border-color: ${(props: IContainer) => props.borderColor};
  border-radius: ${(props: IContainer) => props.borderRadius};
  padding: ${(props: IContainer) => props.padding};
  gap: ${(props: IContainer) => props.gap};
  width: ${(props: IContainer) => props.width};
`;
