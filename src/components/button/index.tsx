import { FC, ReactElement, ReactNode } from "react";
import { StyledButton } from "./styles";

type ButtonProps = {
  children: ReactNode;
};

const Button: FC<ButtonProps> = ({ children }): ReactElement => {
  return <StyledButton>{children}</StyledButton>;
};

export default Button;
