import React from 'react';
import cartInventorySlice from "../../store/cartInventory";
import {cartArray} from '../../store/cartInventory';
import {useSelector} from 'react-redux';

const SimpleCart = () => {  // Attribution: logic help received from my sister!
    
    const array = useSelector(cartArray);

    const aggregateArrayBuilder = (accumulatedArray, currentValue) => { 
        // if currentValue exists in the accArray return the accArray; if !exist push it into the new accArray and return the accArray 


        if (accumulatedArray.includes(currentValue)) {
            console.log(`new element already exists: ${currentValue}`);
            return accumulatedArray}
        else {
            console.log(`new element added to accumulatedArray: ${accumulatedArray}`);
            accumulatedArray.push(currentValue);
            return accumulatedArray
        }
    };

    const aggregateArray = array.reduce(aggregateArrayBuilder, []);

 //   const contents = array.map((item,index) => <li key={index}>{item}</li>);  //Attribution: https://scrimba.com/articles/react-list-array-with-map-function/
  const contents = aggregateArray.map((item,index) => <li key={index}>{item}</li>);  //Attribution: https://scrimba.com/articles/react-list-array-with-map-function/
    
    return (
        <>
          <ul>
            {contents}
          </ul>
        </>
)}

export default SimpleCart;