import React from "react";
import { useDispatch } from "react-redux";
// import "./product.css";
import productSlice from "../../store/products";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <article className="Product">
      <header
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <h2>{product.title}</h2>
        <button
          onClick={() => {
            dispatch(productSlice.actions.showProduct(product));
          }}
        >
          Open
        </button>
      </header>
      <main>
        <figure>
          <img src={product.image_url} width="200px" alt={product.keyword} /> //
          verify whether this matches the json we're using for this project
        </figure>
        <p>{product.description}</p>
      </main>
    </article>
  );
};

export default Product;
