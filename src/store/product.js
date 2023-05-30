import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const loadProducts = createAsyncThunk(
  'products/load',
  async()=> {
    const response = await fetch("http://demo8666583.mockable.io/");
    const json = await response.json();
    console.log (`here is the api json info: ${JSON.stringify(json)}`);
    return json.results;
  }
);

// export const updateProduct = createAsyncThunk(                    // START HERE:  lines 13 - 28 & 65-71 are from class demo code; Todo: update variables and .env file; update routes on mockable.io; 
//   'products/update',
//   async ({product, stockAmount}) => {
//     const updatedProduct = {
//       ...product,
//       inStock: product.inStock - stockAmount,
//     };
//     // PUT to the API at products/{id}
//     const response = await fetch(
//       `${process.env.REACT_APP_API}/products/${product._id}`,
//       {
//         method: "PUT",
//         contentType: "application/json",
//         body: JSON.stringify(updatedProduct),
//       }
// );

// return response.json();
//     }
// );

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
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
    extraReducers: (builder) => {
    builder
    .addCase(loadProducts.fulfilled, (state, {payload}) => {
    state.products = payload;
    })
          // .addCase(updateProduct.fulfilled, (state, {payload}) => {
      //   // console.log(`updateProduct.fulfilled`, payload);
      //   const product = state.products.find(
      //     (product) => product._id === payload._id
      //   );
      //   product.inStock = payload.inStock;
      // });
  },
});

export const filteredProducts = ({ product: { categoryName, products } }) =>
  categoryName
    ? products.filter((product) => product.category === categoryName)
    : products;

export default productSlice;
