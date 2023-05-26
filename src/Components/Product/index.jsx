/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import productSlice from "../../store/product";
import React, { useState} from "react";
import Button from "@mui/material/Button";
// import {useEffect} from "react";

let cartCounter = 0;

// const setCartCounter = () => {
//   cartCounter += 1;
//   console.log(`Product/index.jsx: cartCounter: ${cartCounter}`);
// };

useSelector ((state) => {state.cartCounter});

console.log(`Product/index.jsx: cartCounter: ${cartCounter}`);

const Product = ({product}) => {

  // useEffect(() => {
  //      }, [cartCounter,setCartCounter]);

  // Note: actions call reducers
  const dispatch = useDispatch();
  // const setNumberInCartAction = useDispatch(productSlice.setNumberInCartReducer());
  const increaseNumberInCartAction = useDispatch(productSlice.increaseNumberInCartReducer());
  const decreaseNumberInCartAction = useDispatch(productSlice.decreaseNumberInCartReducer());

  const [itemAmt, setItemAmt] = useState(0);  

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
        {/* <Button variant="contained" onClick={()=> {setItemAmt(itemAmt + 1), setCartCounter()}}>Add to Cart</Button> */}
        <Button variant="contained" onClick={()=> {setItemAmt(itemAmt + 1), increaseNumberInCartAction(cartCounter + 1)}}>Add to Cart</Button>
        <p></p>
        <Button variant="text" onClick={() => {setItemAmt(itemAmt - 1), decreaseNumberInCartAction(cartCounter - 1)}}> Remove from Cart</Button>
        <p></p>
        <p>You have {itemAmt} of these in your cart</p>
    </article>
  );
};

export default Product;
