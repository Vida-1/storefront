import React from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import ActiveCategory from "./Components/ActiveCategory";
import Products from "./Components/Products";
import ProductModal from "./Components/ProductModal";

function App() {
  return (
    <>
      <Header />
      <ActiveCategory />
      <Products />
      <Footer />
      <ProductModal />
    </>
  );
}

export default App;
