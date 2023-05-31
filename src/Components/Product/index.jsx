/* eslint-disable react/prop-types */
import { useDispatch, useSelector} from "react-redux";
import productSlice from "../../store/product";
import cartInventorySlice from "../../store/cartInventory";
import React from "react";
import Button from "@mui/material/Button";
import {updateProduct} from "../../store/product";
import { useState } from "react";

const Product = ({product}) => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.product.products);

  const add = () => {dispatch(cartInventorySlice.actions.setAddToCart(product.product))};
  const remove = () => {dispatch(cartInventorySlice.actions.setRemoveFromCart(product.product))};

  const doUpdateProduct = () => {
    dispatch(updateProduct(products[0], 1 ));                              
   console.log(`${products} stockAmount should now be updated by ${1}`);
  }
  const [itemAmt, setItemAmt] = useState(0);  

  const buttonAdd =() => {
    add();
    doUpdateProduct()

  };

    const buttonRemove =() => {
      remove()
      doUpdateProduct()
    
  };
    
  return (
    <>
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
        
        <Button variant="contained" onClick={[add, doUpdateProduct(products, 1)]}>Add to Cart</Button>
        <p></p>
        <Button variant="text" onClick={[remove, doUpdateProduct(products, -1)]}> Remove From Cart</Button>
    </article>
    </>
  );
};

export default Product;
