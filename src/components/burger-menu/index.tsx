import { FC, ReactElement, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Menu from "./menu";
import { StyledBurgerMenuWrapper, StyledBurgerMenuButton } from "./styles";

const BurgerMenu: FC = (): ReactElement => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openMenu = (): void => {
    setIsOpen(true);
  };

  const closeMenu = (): void => {
    setIsOpen(false);
  };

  return (
    <StyledBurgerMenuWrapper>
      <StyledBurgerMenuButton onClick={openMenu}>
        <GiHamburgerMenu />
      </StyledBurgerMenuButton>
      <Menu isOpen={isOpen} close={closeMenu} />
    </StyledBurgerMenuWrapper>
  );
};

export default BurgerMenu;
