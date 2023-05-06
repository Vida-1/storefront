import React from 'react';
import { Button } from '@mui/material';

const CartIndicator = () =>{

  return (
    <>
      <Button height="24px" width="24px" >
        Cart ({parseInt(Math.random()*10)})
      </Button>
    </>
  );

};

export default CartIndicator;