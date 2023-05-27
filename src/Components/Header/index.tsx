import React from "react";
import CartIndicator from "../CartIndicator/CartIndicator.jsx";

const Header = () => {

  // useEffect (CartIndicator), [cartCounter]

  return (
    <header
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <h1>Welcome to the Storefront</h1>
      <CartIndicator />
    </header>
  );
};

export default Header;
