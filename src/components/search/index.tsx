import { FC, ReactElement, useState } from "react";
import Input from "../input";
import SearchButton from "./search-button";
import { StyledSearchWrapper } from "./styles";

type SearchProps = {
  onSearch: (value: string) => void;
};

const Search: FC<SearchProps> = ({ onSearch }): ReactElement => {
  const [searchValue, setSearchValue] = useState<string>("");

  return (
    <StyledSearchWrapper>
      <Input
        type="search"
        onChange={(value) => setSearchValue(value as string)}
        fluid
      />
      <SearchButton onClick={() => onSearch(searchValue)} />
    </StyledSearchWrapper>
  );
};

export default Search;
