import { FC, ReactElement, useState } from "react";
import { BiCategoryAlt, BiFilterAlt } from "react-icons/bi";
import CategoriesModal from "../categories-modal";
import FilterModal from "../filter-modal";
import { StyledContainer } from "../../../../style/common.style";
import {
  StyledTopControlsWrapper,
  StyledTopControlsChangeCategory,
  StyledTopControlsFilter,
  StyledTopControls,
} from "./styles";

const TopControls: FC = (): ReactElement => {
  const [isCategoriesModalOpen, setIsCategoriesModalOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);

  const openCategoriesModal = (): void => {
    setIsCategoriesModalOpen(true);
  };

  const closeCategoriesModal = (): void => {
    setIsCategoriesModalOpen(false);
  };

  const openFilterModal = (): void => {
    setIsFilterOpen(true);
  };

  const closeFilterModal = (): void => {
    setIsFilterOpen(false);
  };

  return (
    <StyledTopControlsWrapper>
      <StyledContainer>
        <StyledTopControls>
          <StyledTopControlsChangeCategory onClick={openCategoriesModal}>
            <BiCategoryAlt />
            <span>Categories</span>
          </StyledTopControlsChangeCategory>

          <StyledTopControlsFilter onClick={openFilterModal}>
            <BiFilterAlt />
            <span>Filter</span>
          </StyledTopControlsFilter>
        </StyledTopControls>
      </StyledContainer>

      <CategoriesModal
        isOpen={isCategoriesModalOpen}
        close={closeCategoriesModal}
      />
      <FilterModal isOpen={isFilterOpen} close={closeFilterModal} />
    </StyledTopControlsWrapper>
  );
};

export default TopControls;
