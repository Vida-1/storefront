import { createSlice } from "@reduxjs/toolkit";

const Products = require("./data.json");

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: Products,
    categoryName: undefined,
    selectedProduct: undefined,
    numberInCart: 0, 
  },
  reducers: {
    setCategory: (state, action) => {
      state.categoryName = action.payload;
    },
    showProduct: (state, action) => {
      state.selectedProduct = action.payload; 
    },
    setNumberInCartReducer: (state, action) => { 
      state.numberInCart=action.payload;
    },
    increaseNumberInCartReducer: (state, action) => { 
      state.numberInCart=action.payload;
    },
    decreaseNumberInCartReducer: (state, action) => { 
      state.numberInCart=action.payload;
    }   

  },
});

export const filteredProducts = ({ product: { categoryName, products } }) =>
  categoryName
    ? products.filter((product) => product.category === categoryName)
    : products;

export default productSlice;
