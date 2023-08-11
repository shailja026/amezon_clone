import React from 'react'
import {data} from "./ElectronicsData"
import Navbar from './Navbar'
import SecondNav from './SecondNav'
import ClothsCard from './ClothsCard'
import styles from "./clothes.module.css";

function Electronics() {
  return (
    <div>
        <Navbar/>
        <SecondNav/>
        <div className={styles.ClothesData} >
        {data.map((el, i) => {
          return (
            <div className={styles.cards}>
              <ClothsCard el={el} />
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default Electronics