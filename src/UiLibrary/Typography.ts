import styled from "styled-components";
import { ITypography } from "../types/common";
export const Typography = styled.p`
  margin: 0;
  font-weight: 500;
  text-align: ${(props: ITypography) => props.textAlign};
`;
