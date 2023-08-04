import React, { useState, useEffect } from "react";
import styles from "./Products.module.css";
import { Link } from "react-router-dom";
function Products() {
  return (
    <div className={styles.mainContainer}>
      {/* electronics products */}

      <div className={styles.products}>
        <h1>Keep shopping for</h1>
        <div className={styles.card}>
          <div className={styles.item}>
            <img
              src="https://m.media-amazon.com/images/I/41n9EaiDn7L._MCnd_AC_.jpg"
              alt=""
            />
            <p>
              Men's sweatshirts &… <br />1 viewed
            </p>
          </div>
          <div className={styles.item}>
            <img
              src="https://m.media-amazon.com/images/I/51Llx5f-IlL._AC_UL600_FMwebp_QL65_.jpg"
              alt=""
            />
            <p>
            Women Shirts <br />1 viewed
            </p>
          </div>
          <div className={styles.item}>
            <img
              src="https://m.media-amazon.com/images/I/71s37gO6PPL._AC_UL600_FMwebp_QL65_.jpg"
              alt=""
            />
            <p>
              Women Tops
              <br />1 viewed
            </p>
          </div>
          <div className={styles.item}>
            <img
              src="https://m.media-amazon.com/images/I/71b0A6T6FpL._AC_UL600_FMwebp_QL65_.jpg"
              alt=""
            />
            <p>
              Gaming keyboards <br />1 viewed
            </p>
          </div>
        </div>
        <button>view more products</button>
      </div>

      {/* Cases and covers for top smartphones*/}

      <div className={styles.products}>
        <h1>Cases and covers for top smartphones</h1>
        <div className={styles.card}>
          <div className={styles.item}>
            <img className={styles.phone}
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/WLA/2023/MSOAUGART/DESKTOPMSO/PC_QC_186x116_1._SY116_CB599484764_.jpg"
              alt=""
            />
            <p>
               iPhone 14 | Staring<br />Rs-89
            </p>
          </div>
          <div className={styles.item}>
            <img className={styles.phone}
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/WLA/2023/MSOAUGART/DESKTOPMSO/PC_QC_186x116_2._SY116_CB599484764_.jpg"
              alt=""
            />
            <p>
              Samsung Galaxy S22 <br /> |Starting rs-79
            </p>
          </div>
          <div className={styles.item}>
            <img className={styles.phone}
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/WLA/2023/MSOAUGART/DESKTOPMSO/PC_QC_186x116_3._SY116_CB599484764_.jpg"
              alt=""
            />
            <p>
              OnePlus Nord CE 3 Lite
              <br /> | Starting Rs-78
            </p>
          </div>
          <div className={styles.item}>
            <img className={styles.phone}
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/WLA/2023/MSOAUGART/DESKTOPMSO/PC_QC_186x116_4._SY116_CB599484764_.jpg"
              alt=""
            />
            <p>
              Redmi 12C| Starting <br /> Rs-89
            </p>
          </div>
        </div>
        <button>view more products</button>
      </div>

      {/* Phone & smartphons */}
      <div className={styles.products}>
        <div className={styles.sale}>
        <h1>Great Freedom Sale</h1>
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/Events/img23/Aug23ART/GW/Shop-all-Deals_PC-CC_1X._SY304_CB599376706_.jpg" alt="" />
        
        
        <Link to="/Produts">view all</Link>
        </div>
       
      </div>

      {/* SignIn box and dummy card */}

      <div className={styles.right}>
        <div className={styles.singIn}>
          <h1>Sign in for your best experience</h1>
          <button>Sign In Securely</button>
        </div>
        <div className={styles.dummyImg}>
          <img
            src="https://m.media-amazon.com/images/G/31/img19/AMS/Houseads/Laptops-Sept2019._CB436595915_.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Products;
