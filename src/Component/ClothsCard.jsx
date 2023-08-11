import React from "react";
import styles from "./clothsCard.module.css";
import { BsFillStarFill } from "react-icons/bs";
import { addToCart } from "../redux/createSlice";
import { useDispatch, useSelector } from "react-redux";
import { totalAmount } from "../redux/createSlice";
import {FaRupeeSign} from "react-icons/fa"
function ClothsCard({ el }) {
  const { id, Image, title, rating, price, discount, offer } = el;
  const dispatch = useDispatch();
  // const state = useSelector((state) => state.amazon)
  const Rating = Math.floor(rating)
  const addProductToCart = (el) => {
    dispatch(addToCart(el));
    // dispatch(totalAmount(el));
   
  };

  return (
    <div className={styles.Card}>
      <img src={Image} alt="" />

      <p className={styles.info}>{title}</p>

     <div className={styles.rating}>
     {Array(Rating)
        .fill()
        .map((_, i) => (
          <p className={styles.rating}>
            <BsFillStarFill />
          </p>
        ))} 
     </div>

      <p className={styles.price}>
        <FaRupeeSign/> 
        {price}</p>
      <p className={styles.discount}>{discount}</p>
      <p className={styles.offer}> {offer}</p>
      <button className={styles.btn} onClick={() => addProductToCart(el)}>
        Add to cart
      </button>
    </div>
  );
}

export default ClothsCard;
