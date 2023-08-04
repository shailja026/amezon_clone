import React from "react";
import Navbar from "../Component/Navbar";
import Carosoul from "../Component/Carosoul";
import SecondNav from "../Component/SecondNav";
import Products from "../Component/Products";

function Home() {
  return (
    <div>
      <Navbar />
      <SecondNav/>
      <Carosoul/>
      <Products/>
    </div>
  );
}

export default Home;
