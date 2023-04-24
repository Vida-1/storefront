import React from "react";
import Product from "../Product";
import { filteredProducts } from "../../store/product";
import { useSelector } from "react-redux";
import { Grid, Paper } from "@mui/material";

const Products = () => {
  const products = useSelector(filteredProducts);
  return (
    <Grid container spacing={4} justify="center">
      <Paper>
        xs=6
        {products.map((product) => (
          <Product product={product} key={"I'm a key"} />
        ))}
      </Paper>
    </Grid>
  );
};

export default Products;
