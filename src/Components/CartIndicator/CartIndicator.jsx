import React from 'react';
import { Button } from '@mui/material';
import {cartCounter} from '../Product';
import {useEffect} from 'react';

const CartIndicator = () =>{

  useEffect(() => {
    console.log (`CartIndicator cartCounter: ${cartCounter}`)
  }, [cartCounter]);

  return (
    <>
      <Button height="24px" width="24px" >
        Cart ({cartCounter})
      </Button>
    </>
  );

};

export default CartIndicator;

// ** Start Here **
//Notes:  you tell react to re-render by calling your setState function
// so maybe add a useState hook to this component and call setCartCounter in
// the Button?