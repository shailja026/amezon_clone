import React from "react";
import styles from "./secondNa.module.css";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import { BsCaretDown } from "react-icons/bs";
function SecondNav() {
  return (
    <div className={styles.SecondNav}>
      <div className={styles.sidebar}>
        <AiOutlineMenu />
        <h5>All</h5>
      </div>
      <p className={styles.miniTV}><Link to="https://www.amazon.in/minitv?ref_=nav_avod_desktop_topnav">Amazon miniTV</Link></p>
      <p>Sell</p>
      <p>Best Sellers</p>
      <p>Today's Deals</p>
      <p>Mobiles</p>
      <p>New Relises</p>
      <p>Costomer Service</p>
      <div className={styles.hover_img}>
        
        <div>Prime<BsCaretDown/><span><img src="https://m.media-amazon.com/images/G/31/prime/NavFlyout/TryPrime/2018/Apr/IN-Prime-PIN-TryPrime-MultiBen-Apr18-400x400._CB612889281_.jpg" alt="hhh" height="100" /></span></div>
        
      </div>
      <p>Electronics</p>
      <p>Home & Kitchens</p>
      <p>Gift Ideas</p>
      <img
        src="https://m.media-amazon.com/images/G/31/Events/img23/Aug23ART/GW/AugART23_SWM_SM._CB599312843_.jpg"
        alt=""
      />
    </div>
  );
}

export default SecondNav;
