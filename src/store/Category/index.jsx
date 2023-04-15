import React from "react";

import { useDispatch } from "react-redux";
import productSlice from "../product";

const Category = () => {
  const dispatch = useDispatch();
  return (
    <select
      onChange={(e) => {
        const category = e.target.value;
        dispatch(
          productSlice.actions.setCategory(
            category === "" ? undefined : String(category)
          )
        );
      }}
    >
      <option value="">All</option>
      <option value="Electronics">Electronics</option>
      <option value="Food">Food</option>
      <option value="Clothing">Clothing</option>
    </select>
  );
};

export default Category;
