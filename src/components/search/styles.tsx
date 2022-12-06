import styled from "styled-components";

export const StyledSearchWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const StyledSearchButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 35px;
  height: 100%;
  right: 0;
  top: 0;
  font-size: 24px;
  background: ${(props) => props.theme.palette.primary};
  color: ${(props) => props.theme.palette.white};
  border-radius: 0 6px 6px 0;
`;
