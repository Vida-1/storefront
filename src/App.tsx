import React from "react";

import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Products from "./Components/Products";
import ProductModal from "./Components/ProductModal";
import { Grid, Paper } from "@mui/material";

function App() {
  return (
    <>
      <Header />

        <Products />

      <Footer />
      <ProductModal />
    </>
  );
}

export default App;
