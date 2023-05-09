/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import productSlice from "../../store/product";
import React, { useState} from "react";
import Button from "@mui/material/Button";


const Product = ({product}) => {

  const dispatch = useDispatch();
  const [itemAmt, setItemAmt] = useState(0);  // Is this is scoped correctly? It may be causing the cart inc/dec issue.

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
        <p></p>
        <Button variant="contained" onClick={()=> {setItemAmt(itemAmt + 1)}}>Add to Cart</Button>
        <p></p>
        <Button variant="text" onClick={() => {setItemAmt(itemAmt - 1)}}> Remove from Cart</Button>
        <p></p>
        <p>You have {itemAmt} of these in your cart</p>
    </article>
  );
};

export default Product;
