import * as React from "react";

import { useDispatch } from "react-redux";
import productSlice from "../product";
import { Select, MenuItem } from "@mui/material";

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
      <MenuItem value="">All</MenuItem>
      <MenuItem value="Electronics">Electronics</MenuItem>
      <MenuItem value="Food">Food</MenuItem>
      <MenuItem value="Clothing">Clothing</MenuItem>
    </Select>
  );
};

export default Category;
