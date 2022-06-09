import React from "react";
import Navbars from "./components/navbar/Navbars";
import Header from "./components/header/Header";
import DisplayImage from "./components/carousel/DisplayImage";
import Body from "./components/body/Body";
import Bodycontact from "./components/BodyContact/Bodycontact";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <Navbars />
      <DisplayImage />
      <Body />
      <Bodycontact />
      <Footer />
    </div>
  );
}

export default App;
