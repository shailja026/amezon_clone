import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Clothes from "./Component/Clothes";
import Electronics from "./Component/Electronics";
import SignIn from "./pages/SingnIn/SignIn.jsx";
import Cart from "./Component/Cart";

import SignUp from "./pages/SignUp/SignUp";
import Payment from "./Component/payment/Payment";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Products_Clothing" element={<Clothes />} />
          <Route path="/Products_Electronics" element={<Electronics />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/payment" element={<Payment/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
