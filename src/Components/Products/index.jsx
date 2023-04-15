import React from "react";
import Product from "../Product";
import { filteredProducts } from "../../store/product";
import { useSelector } from "react-redux";

const Products = () => {
  const products = useSelector(filteredProducts);
  return (
    <section>
      {products.map((product) => (
        <Product product={product} />
      ))}
    </section>
  );
};

export default Products;
