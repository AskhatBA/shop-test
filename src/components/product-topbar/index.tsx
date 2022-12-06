import { FC, ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import { StyledProductTopbarWrapper, StyledProductTopbarBack } from "./styles";

const ProductTopbar: FC = (): ReactElement => {
  const navigate = useNavigate();

  const goBack = (): void => {
    navigate(-1);
  };
  return (
    <StyledProductTopbarWrapper onClick={goBack}>
      <StyledProductTopbarBack>
        <IoMdArrowBack />
      </StyledProductTopbarBack>
    </StyledProductTopbarWrapper>
  );
};

export default ProductTopbar;
