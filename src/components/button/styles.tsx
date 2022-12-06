import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 8px 16px;
  color: ${(props) => props.theme.palette.white};
  border-radius: 6px;
  background: ${(props) => props.theme.palette.primary};
  font-size: 16px;
`;
