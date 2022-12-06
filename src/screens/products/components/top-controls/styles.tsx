import styled from "styled-components";

export const StyledTopControlsWrapper = styled.div`
  position: fixed;
  width: 100%;
  background: ${(props) => props.theme.palette.white};
  top: 50px;
  left: 0;
`;

export const StyledTopControls = styled.div`
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledTopControlsChangeCategory = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;

  span {
    margin-left: 4px;
  }
`;

export const StyledTopControlsFilter = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
`;
