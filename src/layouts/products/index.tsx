import { FC, ReactElement } from "react";
import Topbar from "../../components/topbar";
import { StyledProductsLayoutWrapper } from "./styled";

type ProductsLayoutProps = {
  children: ReactElement | ReactElement[] | string;
};

const ProductsLayout: FC<ProductsLayoutProps> = ({
  children,
}): ReactElement => {
  return (
    <StyledProductsLayoutWrapper>
      <Topbar />
      <main>{children}</main>
    </StyledProductsLayoutWrapper>
  );
};

export default ProductsLayout;
