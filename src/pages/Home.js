import React from "react";
import Navbar from "../Component/Navbar";
import Carosoul from "../Component/Carosoul";
import SecondNav from "../Component/SecondNav";
import Products from "../Component/Products";
import DummyData from "../Component/DummyData";
import Footer from "./footer/Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <SecondNav/>
      <Carosoul/>
      <div style={{padding:"0.5rem"}}>
      <Products/>
      <DummyData/>
      </div>
      <Footer/>
    </div>
  );
}

export default Home;
