import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./Products.module.css"
function DummyData() {
  return (
    <div className={styles.mainContainer}>
    {/* electronics products */}

    <div className={styles.products}>
      <h1>Toys Under $30</h1>
      <div className={styles.card}>
        <img className={styles.toy_section}
        src='https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2022/img/Amazon_Exports/XCM_CUTTLE_1469244_2584128_379x304_1X_en_US._SY304_CB609318944_.jpg' alt='' />
     
      </div>
      <p className={styles.para}>Shop now</p>
    </div>

    {/* Cases and covers for top smartphones*/}

    <div className={styles.products}>
      <h1>Electronics</h1>
      <div className={styles.card}>
        
        <img className={styles.toy_section}
        src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg' alt='' />
       
        
      </div>
      <p className={styles.para}>Shop new</p>
    </div>

    {/* Phone & smartphons */}
    <div className={styles.products}>
      <h1>Beauty picks</h1>
      <div className={styles.card}>
        
        <img className={styles.toy_section}
        src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Beauty_1x._SY304_CB432774351_.jpg' alt='' />
       
        
      </div>
      <p className={styles.para}>Shop new</p>
    </div>

    {/* SignIn box and dummy card */}

    <div className={styles.products}>
      <h1>Shop Laptops & Tablets</h1>
      <div className={styles.card}>
        
        <img className={styles.toy_section}
        src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Laptops_379x304_1X_en_US._SY304_CB418608471_.jpg' alt='' />
       
        
      </div>
      <p className={styles.para}>Shop new</p>
    </div>
  </div>
  )
}

export default DummyData