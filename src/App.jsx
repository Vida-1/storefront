import React from "react";
import "./App.scss";
import Header from "./Components/Header/index";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <img src="https://media4.giphy.com/media/AHeTfHgVFPHgs/giphy.gif?cid=6c09b9526nkhh1eg3k1zgc7agh9pcdka23mh6wp99pxx5k8b&rid=giphy.gif&ct=g" />
      <p> Burn On</p>
      <Footer />
    </div>
  );
}

export default App;
