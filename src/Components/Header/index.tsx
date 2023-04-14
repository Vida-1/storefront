import React from "react";
import Category from "../Category";

const Header = () => {
  return (
    <header
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
    >
      <h1>Welcome to the Storefront</h1>
      <Category />
    </header>
  );
};

export default Header;
