import styled from "styled-components";

const DEFAULT_INPUT_WIDTH = 250;

export const StyledInputWrapper = styled.label<{ fluid?: boolean }>`
  display: block;
  width: ${(props) => (props.fluid ? "100%" : `${DEFAULT_INPUT_WIDTH}px`)};

  input {
    display: block;
    width: ${(props) => (props.fluid ? "100%" : `${DEFAULT_INPUT_WIDTH}px`)};
    border: 1px solid ${(props) => props.theme.palette.gray};
    border-radius: 6px;
    outline: none;
    box-sizing: border-box;
    height: 35px;
    padding: 0 8px;
    transition: box-shadow 0.2s ease-in-out;

    &:focus {
      border-color: ${(props) => props.theme.palette.white};
      box-shadow: 0 0 0 2px ${(props) => props.theme.palette.primary};
    }
  }
`;
