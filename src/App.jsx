import React from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import ActiveCategory from "./Components/ActiveCategory";
import Products from "./Components/Products";
import ProductModal from "./Components/ProductModal";
import SimpleCart from "./Components/SimpleCart/SimpleCart";
import {useEffect} from 'react';
import { loadProducts } from "../../store/products.js";
import {useSelector, useDispatch} from "react-redux";

function App() {

  const dispatch = useDispatch();
  
  useEffect(() => {dispatch(loadProducts())},[]);
  
  const { products } = useSelector(({products}) => products);
  console.log(`This is the products.length: ${products.length}`);

  return (
    <>
      <Header />
      <SimpleCart />
      <div>Products: {products.length}</div>;
      <ActiveCategory />
      <Products />
      <Footer />
      <ProductModal />
    </>
  );
}

export default App;