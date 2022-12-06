import { FC, ReactElement } from "react";
import { StyledInputWrapper } from "./styles";

type InputProps = {
  type?: string;
  placeholder?: string;
  fluid?: boolean;
  onChange?: (value: string | number) => void;
};

const Input: FC<InputProps> = ({
  placeholder,
  type,
  fluid,
  onChange,
}): ReactElement => {
  return (
    <StyledInputWrapper fluid={fluid}>
      <input
        type={type}
        placeholder={placeholder}
        onChange={(e) => onChange && onChange(e.target.value)}
      />
    </StyledInputWrapper>
  );
};

Input.defaultProps = {
  placeholder: "",
  type: "text",
  fluid: false,
  onChange: () => {},
};

export default Input;
