import React from "react";
import "./navbar.css"
import{ GoLocation} from "react-icons/go";
import {ImCart} from "react-icons/im"
import {FiSearch } from "react-icons/fi"
function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT7czhAdtUjkWpgcz0xThWqv6DhKAIJKmxpnJxMAgdww&s" alt="" />
      </div>
      <div className="location">
        <GoLocation />
        <p>select your location</p>
      </div>
      <div className="seachBar">
        <select name="all" id="category">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>

        <input placeholder="Search amezon.in" />
        <div>
         <FiSearch/>
        </div>
      </div>
        
        <div className="right">
            <div className="language">
                <select name="">

                </select>
            </div>
            <div className="SignIn">hello Sign</div>
            <div className="return">Order and return</div>
            <div className="cart">
                <p>0</p>
                <ImCart/>
            </div>
        </div>

    </div>
  );
}

export default Navbar;
