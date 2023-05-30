import React from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import ActiveCategory from "./Components/ActiveCategory";
import Products from "./Components/Products";
import ProductModal from "./Components/ProductModal";
import SimpleCart from "./Components/SimpleCart/SimpleCart";
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {loadProducts} from "./store/product";

const App=()=>{

// const {products} = useSelector(({products}) => products); //from demo
 const products = useSelector((state) => state.product.products); //easier to read version attribution: sister helped make this understandable
 const dispatch = useDispatch();
 useEffect(() => {dispatch(loadProducts())},[]);
    
   console.log(`This is the products.length: ${products.length}`);

  return (
    <>
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
