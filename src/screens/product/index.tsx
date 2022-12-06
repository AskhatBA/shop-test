import { FC, ReactElement, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IProduct } from "../../types/product.types";
import ProductLayout from "../../layouts/product";
import ProductInfo from "./components/product-info";
import { getProductById } from "../../api/products.api";

const ProductScreen: FC = (): ReactElement => {
  const { productId } = useParams();
  const [product, setProduct] = useState<IProduct>();

  const loadProduct = async (): Promise<void> => {
    if (!productId) return;
    const productResponse = await getProductById(productId);
    setProduct(productResponse);
  };

  useEffect(() => {
    loadProduct();
  }, []);

  return (
    <ProductLayout>
      <ProductInfo product={product} />
    </ProductLayout>
  );
};

export default ProductScreen;
