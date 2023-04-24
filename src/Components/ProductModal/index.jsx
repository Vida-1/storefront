import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import productSlice from "../../store/product";
import Button from "@mui/material/Button";

const ProductModal = () => {
  const product = useSelector((state) => state.product.selectedProduct);
  const dispatch = useDispatch();

  return (
    <dialog
      open={product !== undefined}
      style={{
        display: "sticky",
        inset: 0,
        padding: "20px",
      }}
    >
      <article>
        <header>
          <h2> {product?.title}</h2>
        </header>
        <main>
          <figure>
            <img
              src={product?.image_url}
              width="400px"
              alt={product?.keyword}
            />
          </figure>
          <p>{product?.description}</p>
        </main>
        <footer>
          <Button
            variant="contained"
            onClick={() => {
              dispatch(productSlice.actions.showProduct(undefined));
            }}
          >
            Close
          </Button>
        </footer>
      </article>
    </dialog>
  );
};

export default ProductModal;
