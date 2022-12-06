import { FC, ReactElement } from "react";
import Search from "../search";
import BurgerMenu from "../burger-menu";
import { StyledTopbarWrapper, StyledTopbar } from "./styles";
import { StyledContainer } from "../../style/common.style";

const Topbar: FC = (): ReactElement => {
  const onSearch = (value: string): void => {
    console.log("search --> ", value);
  };

  return (
    <StyledTopbarWrapper>
      <StyledContainer>
        <StyledTopbar>
          <Search onSearch={onSearch} />
          <BurgerMenu />
        </StyledTopbar>
      </StyledContainer>
    </StyledTopbarWrapper>
  );
};

export default Topbar;
