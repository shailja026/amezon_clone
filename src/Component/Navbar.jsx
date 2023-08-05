import React from "react";
import "./navbar.css"
import{ GoLocation} from "react-icons/go";
import { BsCaretDown } from "react-icons/bs";
import {ImCart} from "react-icons/im"
import {FiSearch } from "react-icons/fi"
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/"><img className="logoImage" src="data:image/png;base64,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" alt="" />
        </Link>
      </div>
      <div className="location">
         <GoLocation />
        <p><small>Hello,</small><br/>select your location</p>
      </div>
      <div className="seachBar">
        <select name="all" id="category">
          <option value="olvov">All</option>
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
          <option value="mercedes">Mercedes </option>
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
              <img src="data:image/jpeg;base64,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" alt="" />
              <span>EN <BsCaretDown/> </span>
            </div>
            <div className="SignIn">
              
              <p>Hello, sign in <br/>Account & Lists <BsCaretDown/></p>
            </div>
            <div className="return">Order and return <BsCaretDown/></div>
            <div className="cart">
                <p>0</p>
                <ImCart/>
            </div>
        </div>

    </div>
  );
}

export default Navbar;
