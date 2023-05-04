import { filteredProducts } from "../../store/product.js";
import React from "react";
import { useSelector } from "react-redux";

const ActiveCategory = () => {
  let categoryDescription = "";
  const category = useSelector((state) => state.product.categoryName); //Attribution: E Powell helped me work out this state.product.categoryName piece!!

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
    case "Clothing": //E Powell found the typo in here for me
      categoryDescription = "The emperor should have shopped here!";
      break;
    default:
      categoryDescription = category;
      break;
  }

  return (
    <>
        <h1>{category}</h1>
        <p>{categoryDescription}</p>
    </>
  );
};

export default ActiveCategory;
