import { FC, ReactElement } from "react";
import { StyledLoader } from "./styles";

const Loader: FC = (): ReactElement => {
  return (
    <StyledLoader>
      <div />
      <div />
      <div />
      <div />
    </StyledLoader>
  );
};

export default Loader;
