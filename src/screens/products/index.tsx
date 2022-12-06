import { FC, ReactElement, useEffect, useState } from "react";
import ProductsLayout from "../../layouts/products";
import { IProduct } from "../../types/product.types";
import { getProducts } from "../../api/products.api";
import Products from "./components/products";
import TopControls from "./components/top-controls";

const ProductsScreen: FC = (): ReactElement => {
  const [products, setProducts] = useState<IProduct[]>();

  const loadProducts = async (): Promise<void> => {
    const productsResponse = await getProducts();
    setProducts(productsResponse);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <ProductsLayout>
      <TopControls />
      <Products products={products} />
    </ProductsLayout>
  );
};

export default ProductsScreen;
