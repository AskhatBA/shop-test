import styled from "styled-components";

export const StyledModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: ${(props) => props.theme.palette.white};
  z-index: 99;

  @media screen and (min-width: 1120px) {
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 350px;
    height: auto;
  }
`;

export const StyledModalCloseButton = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  font-size: 26px;
`;

export const StyledModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
`;
