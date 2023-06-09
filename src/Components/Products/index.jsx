import React from 'react';
import Product from "../Product";
import { filteredProducts } from "../../store/product";
import { useSelector } from "react-redux";
import { Container, Grid, Card } from "@mui/material";
import { CardContent} from "@mui/material";


const Products = (props) => {
  const products = useSelector(filteredProducts);
  
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
                  <Product 
                    product={product} 
                    key={product.product}                    
                    />
                </CardContent>
              </Card>
            </>
            
          ))}
        </Container>
      </Grid>
  );
};

export default Products;
