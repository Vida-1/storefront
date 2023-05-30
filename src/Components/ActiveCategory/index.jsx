import Category from "../../store/Category/index.jsx";
import React from "react";
import { useSelector } from "react-redux";
import { Grid, Box} from "@mui/material";


const ActiveCategory = () => {
  let categoryDescription = "";
  const category = useSelector((state) => state.product.categoryName); //Attribution: my sister helped me work out this state.product.categoryName piece

  switch (category) {  //Attribution: Here replaced an if/else block with a switch block on suggestion of D Souther
    case "All":
      categoryDescription = "We've got what you need!";
      break;
    case "Electronics":
      categoryDescription = "Electrical doodads";
      break;
    case "Food":
      categoryDescription = "Nomilicous Nutrients";
      break;
    case "Clothing": //E Powell found a typo in here for me
      categoryDescription = "The emperor should have shopped here!";
      break;
    default:
      categoryDescription = category;
      break;
  }

  return (
    <>
    <Grid item md={4} xs={2}>
      <Box
        columns={{ xs: 4, md: 12 }}
        direction='row'
        align='center'
        padding='.5em'
        fontsize='5rem'
        bgcolor='lightblue'>
        
        <h1>{category}</h1>
        <p>{categoryDescription}</p>
      <Category />
      </Box>
    </Grid>
          </>
  );
};

export default ActiveCategory;
