import React from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import ActiveCategory from "./Components/ActiveCategory";
import Products from "./Components/Products";
import ProductModal from "./Components/ProductModal";
import SimpleCart from "./Components/SimpleCart/SimpleCart";

import {useSelector, useDispatch} from "react-redux";
import loadProducts from "./store/products";
import {useEffect} from 'react';

function App() {

  const products = useSelector(({products}) => products);
  const dispatch = useDispatch();

  useEffect(() => {
  dispatch(loadProducts());
  },[]);

  return (
    <>
    <div>Products: {products.length}</div>;
      <Header />
      <SimpleCart />
      <ActiveCategory />
      <Products />
      <Footer />
      <ProductModal />
    </>
  );
}

export default App;

// const { products } = useSelector(({products}) => products);
// const dispatch = useDispatch();

// useEffect(() => {
// dispatch(loadProducts());
// },[]);

// return <div>Products: {products.length}</div>;
// }

// export default App;