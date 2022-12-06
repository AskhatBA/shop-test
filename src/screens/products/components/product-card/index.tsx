import { FC, ReactElement } from "react";
import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { IProduct } from "../../../../types/product.types";
import {
  StyledProductCardWrapper,
  StyledProductCardTitle,
  StyledProductCardImage,
  StyledProductCardPrice,
  StyledProductCardMinorInfo,
  StyledProductCardSold,
  StyledProductCardRating,
} from "./styles";

type ProductCardProps = IProduct;

const ProductCard: FC<ProductCardProps> = ({
  id,
  title,
  image,
  price,
  rating,
}): ReactElement => {
  return (
    <Link to={`/product/${id}`}>
      <StyledProductCardWrapper>
        <StyledProductCardImage>
          <img src={image} alt={title} />
        </StyledProductCardImage>

        <StyledProductCardTitle>{title}</StyledProductCardTitle>

        <StyledProductCardPrice>{price}$</StyledProductCardPrice>

        <StyledProductCardMinorInfo>
          <StyledProductCardSold>{rating.count} sold</StyledProductCardSold>

          <StyledProductCardRating>
            {rating.rate} <AiFillStar />
          </StyledProductCardRating>
        </StyledProductCardMinorInfo>
      </StyledProductCardWrapper>
    </Link>
  );
};

export default ProductCard;
