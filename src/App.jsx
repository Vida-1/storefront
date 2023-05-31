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

  const products = useSelector((state) => state.product.products); //easier to read version of demo code. Attribution: sister helped make this more understandable to me.
  const dispatch = useDispatch();

  // const doUpdateProduct = () => {
  //   dispatch(updateProduct({products}, -2 ));   //hardcoded arguments.
  //   console.log(`${products} stockAmount should now be decreased by 2`);
  // }
  
  useEffect(() => {dispatch(loadProducts())},[]);
  // console.log(`This is the products.length: ${products.length}`);

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
