import { FC, ReactElement } from "react";
import ProductTopbar from "../../components/product-topbar";
import { StyledProduct } from "./styles";

type ProductLayoutProps = {
  children: ReactElement | ReactElement[] | string;
};

const ProductLayout: FC<ProductLayoutProps> = ({ children }): ReactElement => {
  return (
    <StyledProduct>
      <ProductTopbar />
      <main>{children}</main>
    </StyledProduct>
  );
};

export default ProductLayout;
