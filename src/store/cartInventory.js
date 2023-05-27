import { createSlice } from "@reduxjs/toolkit";

const cartInventorySlice = createSlice({
  name: "cartInventory",
  initialState: {
    cartInventoryArray: [],
},
  reducers: {
    setAddToCart: (state, action) => {
      state.cartInventoryArray.push(action.payload);
      console.log(`This is the setAddToCart reducer value: ${state.cartInventoryArray.length}`);
    },

    setRemoveFromCart: (state, action) => {
        // find the index of the element you want to remove
        
        const indexLocation = state.cartInventoryArray.indexOf(action.payload); 

        // use the splice method to move to the element you want to remove and then remove exactly one element from the array
        state.cartInventoryArray.splice(indexLocation, 1);

        console.log (`indexLocation: ${indexLocation}`);
    },
    
},
});

export const cartCounter = (state)=> {
    console.log(`This is the cartCounter value: ${state.cartInventory.cartInventoryArray.length}`);
    return state.cartInventory.cartInventoryArray.length;
};

export const cartArray = (state)=> {
  console.log(`This is the cartInventoryArray: ${state.cartInventory.cartInventoryArray}`);
  return state.cartInventory.cartInventoryArray;
};

export default cartInventorySlice;