import React from "react";
import "./App.scss";
import Header from "./Components/Header/index";
import Footer from "./Components/Footer";
import Products from "./Components/Products";

function App() {
  return (
    <>
      <div className="header">
        <Header />
      </div>

      <div className="products">
      <Products />
      </div>

      <div className="footer">
        <Footer />
      </div>
    </>
  );
}

export default App;
