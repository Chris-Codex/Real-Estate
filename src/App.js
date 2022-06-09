import React from "react";
import Navbars from "./components/navbar/Navbars";
import Header from "./components/header/Header";
import DisplayImage from "./components/carousel/DisplayImage";
import Body from "./components/body/Body";

function App() {
  return (
    <div>
      <Header />
      <Navbars />
      <DisplayImage />
      <Body />
    </div>
  );
}

export default App;
