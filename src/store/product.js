import { createSlice } from "@reduxjs/toolkit";

const Products = require("./data.json");

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: Products,
    categoryName: undefined,
    selectedProduct: undefined,
  },
  reducers: {
    setCategory: (state, action) => {
      state.categoryName = action.payload;
    },
    showProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },
  },
});

export const filteredProducts = ({ product: { categoryName, products } }) =>
  categoryName
    ? products.filter((product) => product.category === categoryName)
    : products;

export default productSlice;
