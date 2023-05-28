import {useSelector} from 'react-redux';
import React from 'react';
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

// const Products = require("./data.json");

export const loadProducts = createAsyncThunk(                            // this is exported so that it can be called and dispatched later
  'products/load',                                                     // this is an arbitrary string by which to identify the thunk
  // this second property is a payload creator. It is an async function that will return a promise
  async()=> {
    const response = await fetch(process.env.REACT_APP_API + "/products");
    const json = await response.json();
    return json.results;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
  },
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(loadProducts.fulfilled, (state, {payload}) => {
      state.products = payload;
      });
    },
});
    
export default productsSlice;