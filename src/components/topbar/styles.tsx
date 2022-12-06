import styled from "styled-components";

export const StyledTopbarWrapper = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  box-shadow: 0 24px 48px -12px rgba(16, 24, 40, 0.18);
  background: ${(props) => props.theme.palette.white};
`;

export const StyledTopbar = styled.div`
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
