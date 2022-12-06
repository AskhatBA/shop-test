import { FC, ReactElement } from "react";
import { BsFillSunFill, BsFillMoonStarsFill } from "react-icons/bs";
import { StyledThemeToggle } from "./styles";

type ThemeToggleProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
};

const ThemeToggle: FC<ThemeToggleProps> = ({
  checked,
  onChange,
}): ReactElement => {
  return (
    <StyledThemeToggle>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <span>
        <i>{checked ? <BsFillMoonStarsFill /> : <BsFillSunFill />}</i>
      </span>
    </StyledThemeToggle>
  );
};

export default ThemeToggle;
