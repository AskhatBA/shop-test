import { FC, ReactElement, memo } from "react";
import { IoIosSearch } from "react-icons/io";
import { StyledSearchButton } from "./styles";

type SearchButtonProps = {
  onClick: () => void;
};

const SearchButton: FC<SearchButtonProps> = ({ onClick }): ReactElement => {
  return (
    <StyledSearchButton onClick={onClick}>
      <IoIosSearch />
    </StyledSearchButton>
  );
};

export default memo(SearchButton);
