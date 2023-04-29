import React from "react";
import Product from "../Product";
import { filteredProducts } from "../../store/product";
import { useSelector } from "react-redux";
import { Container, Grid, Card, CardContent } from "@mui/material";

const Products = () => {
  const products = useSelector(filteredProducts);
  return (
    <Grid item md={4} xs={2}>
      <Container columns={{ xs: 4, md: 12 }} direction = 'row'>
        {products.map((product) => (
          <>
            <Card variant ='outlined' sx={{ display: 'inline-block', margin: "1rem", maxHeight: '200', maxWidth: '200' }} >
              <CardContent>
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
