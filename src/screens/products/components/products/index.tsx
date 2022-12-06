import { FC, ReactElement } from "react";
import { IProduct } from "../../../../types/product.types";
import { StyledContainer } from "../../../../style/common.style";
import ProductCard from "../product-card";
import { StyledProducts } from "./styles";
import Loader from "../../../../components/loader";

type ProductsProps = {
  products: IProduct[] | undefined;
};

const Products: FC<ProductsProps> = ({ products }): ReactElement => {
  if (!products) return <Loader />;

  return (
    <StyledContainer>
      <StyledProducts>
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </StyledProducts>
    </StyledContainer>
  );
};

export default Products;
