import { request } from "../utils/http.utils";
import { IProduct } from "../types/product.types";

export const getProducts = (): Promise<IProduct[]> => {
  return request({
    method: "GET",
    url: "/products",
  });
};

export const getProductById = (
  productId: number | string
): Promise<IProduct> => {
  return request({
    method: "GET",
    url: `/products/${productId}`,
  });
};

export const getProductCategories = (): Promise<string[]> => {
  return request({
    method: "GET",
    url: "/products/categories",
  });
};
