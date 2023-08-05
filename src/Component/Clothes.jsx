import React, { useState } from "react";
import ClothsCard from "./ClothsCard";
import Navbar from "./Navbar";
import SecondNav from "./SecondNav";
import { data } from "./Data";
import styles from "./clothes.module.css";

function Clothes() {
  return (
    <div>
      <Navbar />
      <SecondNav />
      <div className={styles.ClothesData}>
        {data.map((el, i) => {
          return (
            <div className={styles.cards}>
              <ClothsCard el={el} />
            </div>
          );
        })}
      </div>

      {/*  */}
    </div>
  );
}

export default Clothes;
