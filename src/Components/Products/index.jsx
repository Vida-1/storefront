import React, { useState, useEffect } from "react";
import ActiveCategory from "../ActiveCategory";
import Product from "../Product";
import { filteredProducts } from "../../store/product";
import { useSelector } from "react-redux";
import { Container, Grid, Card } from "@mui/material";
import { CardContent, Button} from "@mui/material";
import CartIndicator from "../CartIndicator/CartIndicator";

const Products = () => {
  const products = useSelector(filteredProducts);

    const [itemAmt, setItemAmt] = useState(0);

  return (
      <Grid item md={4} xs={2}>
        <Container columns={{ xs: 4, md: 12 }} direction="row">
          {products.map((product) => (
            <>
              <Card
                variant="outlined"
                sx={{
                  display: "inline-block",
                  margin: "1rem",
                  maxHeight: "200",
                  maxWidth: "200",
                }}
              >
                <CardContent align="center">
                  <Product product={product} key={product.product} />
                  <Button variant="contained" onClick={() => { setItemAmt(itemAmt + 1) }}>Add to Cart</Button>
                  <p></p>
                  <Button variant="text" onClick={() => { setItemAmt(itemAmt - 1) }}> Remove from Cart</Button>
                  <p>`You have {itemAmt} of these in your cart.`</p>
                </CardContent>
              </Card>
            </>
          ))}
        </Container>
      </Grid>
  );
};

export default Products;
