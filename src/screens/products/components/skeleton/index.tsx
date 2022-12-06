import { FC, ReactElement } from "react";
import {
  StyledSkeletonCard,
  StyledSkeletonTitle,
  StyledSkeletonWrapper,
  StyledSkeletonImage,
  StyledSkeletonPrice,
  StyledSkeletonReviews,
} from "./styles";

const NUMBER_OF_PRODUCTS_TO_SHOW = 4;

const ProductsSkeleton: FC = (): ReactElement => {
  const products = new Array(NUMBER_OF_PRODUCTS_TO_SHOW)
    .fill(null)
    .map((value, index) => index + 1);

  return (
    <StyledSkeletonWrapper>
      {products.map((productNumber) => (
        <StyledSkeletonCard key={productNumber}>
          <StyledSkeletonImage />
          <StyledSkeletonTitle />
          <StyledSkeletonPrice />
          <StyledSkeletonReviews />
        </StyledSkeletonCard>
      ))}
    </StyledSkeletonWrapper>
  );
};

export default ProductsSkeleton;
