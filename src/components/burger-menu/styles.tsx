import styled from "styled-components";

export const StyledBurgerMenuWrapper = styled.div`
  margin-left: 8px;
`;

export const StyledBurgerMenuButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  background: ${(props) => props.theme.palette.primary};
  color: ${(props) => props.theme.palette.white};
  border-radius: 6px;
`;

export const StyledMenu = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  width: 300px;
  height: 100vh;
  background: ${(props) => props.theme.palette.primary};
  padding: 32px;
  z-index: 99;

  @media screen and (max-width: 800px) {
    width: 80vw;
  }

  ul {
    list-style: none;

    li {
      display: flex;
      align-items: center;
      color: ${(props) => props.theme.palette.white};
      margin-bottom: 32px;
      font-size: 22px;

      span {
        margin-left: 8px;
      }
    }
  }
`;

export const StyledMenuOverlay = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
`;

export const StyledThemeSwitcher = styled.div`
  position: absolute;
  bottom: 16px;
  right: 16px;
`;
