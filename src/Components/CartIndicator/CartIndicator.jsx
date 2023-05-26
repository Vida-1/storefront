import React from 'react';
import { Button } from '@mui/material';
import {useEffect} from 'react';
import productSlice from '../../store/product';

const CartIndicator = () =>{

  // useEffect(() => {
  //   console.log (`CartIndicator cartCounter: ${cartCounter}`)
  // }, [cartCounter]);

  return (
    <>
      <Button height="24px" width="24px" >
        Cart ({productSlice.cartCounter})
      </Button>
    </>
  );

};

export default CartIndicator;

// ** Start Here **
//Notes:  you tell react to re-render by calling your setState function
// so maybe add a useState hook to this component and call setCartCounter in
// the Button?