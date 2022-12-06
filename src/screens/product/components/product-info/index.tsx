import { FC, ReactElement } from "react";
import { AiFillStar } from "react-icons/ai";
import { IProduct } from "../../../../types/product.types";
import { StyledContainer } from "../../../../style/common.style";
import Loader from "../../../../components/loader";
import {
  StyledProductInfoWrapper,
  StyledProductInfoImage,
  StyledProductInfoTitle,
  StyledProductInfoPrice,
  StyledProductCardMinorInfo,
  StyledProductCardRating,
  StyledProductCardSold,
  StyledProductCardDescription,
} from "./styles";

type ProductInfoProps = {
  product: IProduct | undefined;
};

const ProductInfo: FC<ProductInfoProps> = ({ product }): ReactElement => {
  if (!product) return <Loader />;

  return (
    <StyledContainer>
      <StyledProductInfoWrapper>
        <StyledProductInfoImage>
          <img src={product.image} alt={product.title} />
        </StyledProductInfoImage>
        <StyledProductInfoTitle>{product.title}</StyledProductInfoTitle>
        <StyledProductInfoPrice>{product.price}$</StyledProductInfoPrice>
        <StyledProductCardMinorInfo>
          <StyledProductCardSold>
            {product.rating.count} sold
          </StyledProductCardSold>
          <StyledProductCardRating>
            {product.rating.rate} <AiFillStar />
          </StyledProductCardRating>
        </StyledProductCardMinorInfo>
        <StyledProductCardDescription>
          <h3>Описание</h3>
          <p>{product.description}</p>
        </StyledProductCardDescription>
      </StyledProductInfoWrapper>
    </StyledContainer>
  );
};

export default ProductInfo;
