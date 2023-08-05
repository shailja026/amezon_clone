import React from "react";
import styles from "./clothsCard.module.css";
import { BsFillStarFill } from "react-icons/bs";
function ClothsCard({ el }) {
  const { Image, title, rating, price, discount, offer } = el;
  return (
    <div className={styles.Card}>
      <img src={Image} alt="" />

      <p className={styles.info}>{title}</p>

      <p className={styles.rating}>
        <BsFillStarFill />
      </p>
      {/* {Array.from()} */}

      <p className={styles.price}>{price}</p>
      <p className={styles.discount}>{discount}</p>
      <p className={styles.offer}> {offer}</p>
      <button className={styles.btn}>Add to cart</button>
    </div>
  );
}

export default ClothsCard;
