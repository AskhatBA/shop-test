import styled from "styled-components";

export const StyledProductTopbarWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  height: 51px;
  box-shadow: ${(props) => props.theme.boxShadow.m};
`;

export const StyledProductTopbarBack = styled.div`
  font-size: 24px;
`;
