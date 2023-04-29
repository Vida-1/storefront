import React from "react";
import Product from "../Product";
import { filteredProducts } from "../../store/product";
import { useSelector } from "react-redux";
import { Container, Grid, Card, CardContent } from "@mui/material";

const Products = () => {
  const products = useSelector(filteredProducts);
  return (
    <Grid item md={4} xs={2}>
      <Container columns={{ xs: 4, md: 6 }}>
        {products.map((product) => (
          <>
            <Card md={{ maxWidth: 20 }}>
              <CardContent>
                <p>this is some text on a card</p>
                <Product product={product} key={product.product} />
              </CardContent>
            </Card>
          </>
        ))}
      </Container>
    </Grid>
  );
};

export default Products;
