import { FC, ReactElement, useRef } from "react";
import { FaUserAlt, FaShoppingCart } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";
import Portal from "../portal";
import { useClickOutside } from "../../hooks/use-click-outside";
import { useThemeContext } from "../../context/theme.context";
import ThemeToggle from "../theme-toggle";
import { StyledMenu, StyledMenuOverlay, StyledThemeSwitcher } from "./styles";

type MenuProps = {
  isOpen: boolean;
  close: () => void;
};

const Menu: FC<MenuProps> = ({ isOpen, close }): ReactElement | null => {
  const { isDarkMode, setIsDarkMode } = useThemeContext();
  const menuRef = useRef(null);

  useClickOutside(menuRef, close);

  const toggleDarkMode = (checked: boolean): void => {
    setIsDarkMode(checked);
  };

  if (!isOpen) return null;

  return (
    <Portal wrapperId="burger-menu">
      <>
        <StyledMenu ref={menuRef}>
          <ul>
            <li>
              <FaUserAlt />
              <span>Профиль</span>
            </li>
            <li>
              <MdFavorite />
              <span>Избранное</span>
            </li>
            <li>
              <FaShoppingCart />
              <span>Корзина</span>
            </li>
          </ul>
          <StyledThemeSwitcher>
            <ThemeToggle checked={isDarkMode} onChange={toggleDarkMode} />
          </StyledThemeSwitcher>
        </StyledMenu>
        <StyledMenuOverlay />
      </>
    </Portal>
  );
};

export default Menu;
