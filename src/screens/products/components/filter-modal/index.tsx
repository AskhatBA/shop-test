import { FC, ReactElement } from "react";
import Modal from "../../../../components/modal";
import Button from "../../../../components/button";
import {
  StyledFilterModal,
  StyledFilterItem,
  StyledFilterGroup,
  StyledFilterHeading,
  StyledFilterApply,
} from "./styles";

type FilterModalProps = {
  isOpen: boolean;
  close: () => void;
};

const FilterModal: FC<FilterModalProps> = ({ isOpen, close }): ReactElement => {
  return (
    <Modal isOpen={isOpen} close={close}>
      <StyledFilterModal>
        <StyledFilterHeading>Some filter</StyledFilterHeading>
        <StyledFilterGroup>
          <StyledFilterItem>
            Option 1
            <input type="checkbox" />
          </StyledFilterItem>
          <StyledFilterItem>
            Option 2
            <input type="checkbox" />
          </StyledFilterItem>
          <StyledFilterItem>
            Option 3
            <input type="checkbox" />
          </StyledFilterItem>
          <StyledFilterItem>
            Option 4
            <input type="checkbox" />
          </StyledFilterItem>
        </StyledFilterGroup>
      </StyledFilterModal>
      <StyledFilterApply>
        <Button>Apply</Button>
      </StyledFilterApply>
    </Modal>
  );
};

export default FilterModal;
