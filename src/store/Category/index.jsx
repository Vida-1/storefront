import * as React from "react";

import { useDispatch } from "react-redux";
import productSlice from "../product";
import { Select } from "@mui/material/Select";

const Category = () => {
  const dispatch = useDispatch();
  return (
    <Select
      defaultValue=""
      placeholder="Category"
      sx={{
        width: 200,
        height: 50,
      }}
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
    </Select>
  );
};

export default Category;
