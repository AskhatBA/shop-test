import { FC, ReactElement } from "react";
import { GrClose } from "react-icons/gr";
import Portal from "../portal";
import {
  StyledModalWrapper,
  StyledModalCloseButton,
  StyledModalOverlay,
} from "./styles";

type ModalProps = {
  isOpen: boolean;
  children: ReactElement | ReactElement[] | string;
  close: () => void;
};

const Modal: FC<ModalProps> = ({
  isOpen,
  close,
  children,
}): ReactElement | null => {
  if (!isOpen) return null;

  return (
    <Portal wrapperId="modal">
      <StyledModalWrapper>
        <StyledModalCloseButton onClick={close}>
          <GrClose />
        </StyledModalCloseButton>
        {children}
      </StyledModalWrapper>
      <StyledModalOverlay />
    </Portal>
  );
};

export default Modal;
