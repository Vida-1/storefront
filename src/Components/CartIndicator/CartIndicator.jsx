import React from 'react';
import { Button } from '@mui/material';
import {cartCounter} from '../../store/cartInventory';
import {useSelector} from 'react-redux';

const CartIndicator = () =>{

  const counter = useSelector(cartCounter);

  return (
    <>
      <Button height="24px" width="24px" >
        Cart ({counter})
      </Button>
    </>
  );

};

export default CartIndicator;
