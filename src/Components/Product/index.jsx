/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import productSlice from "../../store/product";
import React from "react";
import Button from "@mui/material/Button";

const Product = ({product}) => {
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
        <h2>{product.product}</h2>
        <Button
          variant="text"
          onClick={() => {
            dispatch(productSlice.actions.showProduct(product));
          }}
        >
          View Details
        </Button>
      </header>
      <main>
        <figure>
          <img src={product.image_url} height={200} width={200} alt={product.keyword} />
        </figure>
        <p>{product.description}</p>
      </main>
    </article>
  );
};

export default Product;
