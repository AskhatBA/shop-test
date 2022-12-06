import { Routes, Route } from "react-router-dom";

// Screens
import Products from "../screens/products";
import Product from "../screens/product";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Products />} />
      <Route path="/product/:productId" element={<Product />} />
    </Routes>
  );
};

export default Router;
