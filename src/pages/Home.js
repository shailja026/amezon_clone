import React, { useState } from "react";
import Navbar from "../Component/Navbar";
import Carosoul from "../Component/Carosoul";
import SecondNav from "../Component/SecondNav";
import Products from "../Component/Products";
import DummyData from "../Component/DummyData";
import Footer from "./footer/Footer";
import { useSelector } from "react-redux";
function Home() {
  const open = useSelector((state) => state.amazon.openDraw);
  return (
    <div>
      <Navbar />
      <SecondNav />
      <div>
        <Carosoul />
        <div style={{ padding: "0.5rem" }}>
          <Products />
          <DummyData />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
