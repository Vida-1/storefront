import React from "react";
import Product from "../Product";
import { filteredProducts } from "../../store/product";
import { useSelector } from "react-redux";
import { Container, Grid, Paper } from "@mui/material";

const Products = () => {
  const products = useSelector(filteredProducts);
  return (
    <Container columns={{ xs: 4, md: 12 }} direction="row">
      <Grid item md={4} xs={2}>
        <Paper elevation={2} variant="outlined" direction="row">
          {products.map((product) => (
            <Product product={product} key={product.product} />
          ))}
        </Paper>
      </Grid>
    </Container>
  );
};

export default Products;
