import { createSlice } from "@reduxjs/toolkit";

const Products = require("./data.json");

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: Products,
    category: undefined,
    selectedProduct: undefined,
  },
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    showProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },
  },
});

export const filteredProducts = ({ product: { category, products } }) =>
  category
    ? products.filter((product) => product.category === category)
    : products;

export default productSlice;