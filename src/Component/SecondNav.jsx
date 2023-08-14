import React, { useState, useEffect } from "react";
import styles from "./secondNa.module.css";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import { BsCaretDown } from "react-icons/bs";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Drawer } from "@mui/material";
import { FaUserCircle } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { auth } from "../firebase";



function SecondNav() {
 
 
  const [isOpener, setIsOpener] = useState(false);
  const [name, setName] = useState("");
  
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setName(user.displayName);
      } else {
        setName("Guest");
      }
    });
  });
  const handleClick = () => {
    setIsOpener(!isOpener)
  };


  
  return (
    <div>
      <div className={styles.SecondNav}>
        <div className={styles.sidebar} onClick={handleClick}>
          <AiOutlineMenu />
          <h5>All</h5>
        </div>
        <p className={styles.miniTV}>
          <Link to="https://www.amazon.in/minitv?ref_=nav_avod_desktop_topnav">
            Amazon miniTV
          </Link>
        </p>
        <p>Sell</p>
        {/* <p>Best Sellers</p>
      <p>Today's Deals</p> */}
        <p>Mobiles</p>
        <p>New Relises</p>
        <p>Costomer Service</p>
        <div className={styles.hover_img}>
          <div>
            Prime
            <BsCaretDown />
            <span>
              <img
                src="https://m.media-amazon.com/images/G/31/prime/NavFlyout/TryPrime/2018/Apr/IN-Prime-PIN-TryPrime-MultiBen-Apr18-400x400._CB612889281_.jpg"
                alt="hhh"
                height="100"
              />
            </span>
          </div>
        </div>
        <p>Electronics</p>
        <p>Home & Kitchens</p>
        <p>Gift Ideas</p>
        <img
          src="https://m.media-amazon.com/images/G/31/Events/img23/Aug23ART/GW/AugART23_SWM_SM._CB599312843_.jpg"
          alt=""
        />
      </div>


      {/* sidebar */}

       <div className={isOpener ? styles.drawer_box : styles.close}>
       <div className={styles.right} onClick={handleClick}>
        <ImCross onClick={handleClick} className={styles.cross}/>
        </div>
        <div className={ `${styles.drawer} ${isOpener ? styles.new_style : ""}` }>
        
            
          
          <div className={styles.profile }>
            <FaUserCircle />
            <h3>Hello {name}</h3>
          </div>
          <div className={styles.trainding}>
            <p>Trending</p>
            <ul>
              <li>best sellers </li>
              <li>new releases</li>
              <li>movers and shakers</li>
            </ul>
          </div>

          <div className={styles.digital_content}>
            <p>Digital Content And Device</p>
            <ul>
              <li>amazon miniTV-FREE entertainment</li>
              <li>
                Echo & alexa
                <MdKeyboardArrowRight />
              </li>
              <li>
                {" "}
                fire TV <MdKeyboardArrowRight />
              </li>
              <li>
                {" "}
                kindle E-Readers & ebooks <MdKeyboardArrowRight />
              </li>
              <li>
                audible audiobooks <MdKeyboardArrowRight />
              </li>
              <li>
                amazon prime video <MdKeyboardArrowRight />
              </li>
              <li>
                amazon prime music <MdKeyboardArrowRight />
              </li>
            </ul>
          </div>
          <div className={styles.category}>
            <p>Shop By Category</p>
            <ul>
              <li>
                mobiles, computer <MdKeyboardArrowRight />
              </li>
              <li>
                TV, Appliances , Electronics <MdKeyboardArrowRight />
              </li>
              <li>
                {" "}
                Men's Fashion <MdKeyboardArrowRight />
              </li>
              <li> Women's fashion</li>
            </ul>
          </div>
          <div className={styles.programes}>
            <p>Progrmams & features</p>
            <ul>
              <li>gifts cards & mobile recharges</li>
              <li>amazon launchpad</li>
              <li>flight tickets</li>
              <li>clearance store</li>
            </ul>
          </div>
          <div className={styles.help}>
            <p>Helps & settings</p>
            <ul>
              <li>Your account</li>
              <li>costomer service</li>
              <li>sign out</li>
            </ul>
          </div>
        </div>
      </div> 
    </div>
  );
}

export default SecondNav;
