/* eslint-disable react/prop-types */
import { useDispatch} from "react-redux";
import productSlice from "../../store/product";
import cartInventorySlice from "../../store/cartInventory";
import React from "react";
import Button from "@mui/material/Button";

const Product = ({product}) => {
  const dispatch = useDispatch();

  // const [itemAmt, setItemAmt] = useState(0);  

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
        <Button variant="contained" onClick={()=>{dispatch(cartInventorySlice.actions.setAddToCart(product.product))}}>Add to Cart</Button>
        <p></p>
        <Button variant="text" onClick={()=>{dispatch(cartInventorySlice.actions.setRemoveFromCart(product.product))}}> Remove From Cart</Button>
    </article>
  );
};

export default Product;
