import React, { useState, useEffect } from "react";
import "./navbar.css";
import { useNavigate } from "react-router-dom";
import { GoLocation } from "react-icons/go";
import { BsCaretDown } from "react-icons/bs";
import { ImCart } from "react-icons/im";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import { auth } from "../firebase";
import { useSelector } from "react-redux";

function Navbar() {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const arr = useSelector((state) => state.amazon.card);
  console.log(arr);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setName(user.displayName);
      } else {
        setName("Guest");
      }
    });
  });

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img
            className="logoImage"
            src="https://th.bing.com/th/id/R.120901f790490f64604175c47ffac352?rik=IWA3HmJjAiLcUg&pid=ImgRaw&r=0"
            alt=""
          />
        </Link>
      </div>
      <div className="location">
        <GoLocation />
        <p>
          <small>Hello,</small>
          <br />
          select your location
        </p>
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
          <FiSearch />
        </div>
      </div>

      <div className="right">
        <div className="language">
          <img
            src="data:image/jpeg;base64,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"
            alt=""
          />
          <span>
            EN <BsCaretDown />{" "}
          </span>
        </div>
        <div className="SignIn">
          <p>
            Hello, {name}
            <br />
            Account & Lists <BsCaretDown />
          </p>
        </div>
        <div className="return">
          Order and return <BsCaretDown />
        </div>
        <Link to="/Cart" className="cart">
          <div >
            <p>{arr?.length}</p>

            <ImCart />
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
