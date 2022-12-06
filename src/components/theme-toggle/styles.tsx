import styled from "styled-components";

export const StyledThemeToggle = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  span {
    display: flex;
    align-items: center;
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    transition: 0.4s;
    border-radius: 34px;
  }

  span i {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
    color: ${(props) => props.theme.palette.primary};
  }

  input:checked ~ span {
    background-color: ${(props) => props.theme.palette.dark};
  }

  input:focus ~ span {
    box-shadow: 0 0 1px #2196f3;
  }

  input:checked ~ span i {
    transform: translateX(26px);
  }
`;
