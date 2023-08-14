import React from "react";
import styles from "./footer.module.css";
import { Link } from "react-router-dom";
import { TfiWorld } from "react-icons/tfi";
function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer className={styles.footer}>
      <div className={styles.Top_button} onClick={scrollToTop}>
        Back to top
      </div>
      <div className={styles.middle_footer}>
        <ul>
          <p>get to know us</p>
          <li className={styles.list}>Carees</li>
          <li className={styles.list}>Blogs</li>
          <li className={styles.list}>about amazon</li>
          <li className={styles.list}>investor relations</li>
          <li className={styles.list}>amazon devices</li>
          <li className={styles.list}>amazon Science</li>
        </ul>

        <ul>
          <p>Make money with us</p>
          <li className={styles.list}>sell products on amaxon</li>
          <li className={styles.list}>sell on amazon business</li>
          <li className={styles.list}>Sell apps on Amazon</li>
          <li className={styles.list}>Become an Affiliate</li>
          <li className={styles.list}>Advertise Your Products</li>
          <li className={styles.list}>Self-Publish with Us</li>
          <li className={styles.list}>Host an Amazon Hub</li>
          <li className={styles.list}>›See More Make Money with Us</li>
        </ul>

        <ul>
          <p>Amazon Payment Products</p>
          <li className={styles.list}>Amazon Business Card</li>
          <li className={styles.list}>Shop with Points</li>
          <li className={styles.list}>Reload Your Balance</li>
          <li className={styles.list}>Amazon Currency Converter</li>
        </ul>

        <ul>
          <p>Let Us help you</p>
          <li className={styles.list}>Amazon & covid-19</li>
          <li className={styles.list}>Your account</li>
          <li className={styles.list}>your orders</li>
          <li className={styles.list}>Shipping rates & policies</li>
          <li className={styles.list}>Return & Replace</li>
          <li className={styles.list}>Manage Your Content and Devices</li>
          <li className={styles.list}>Amazon Assistant</li>
          <li className={styles.list}>Help</li>
        </ul>
      </div>
      <div className={styles.amazon_buttons}>
        <img
          src="https://th.bing.com/th/id/R.120901f790490f64604175c47ffac352?rik=IWA3HmJjAiLcUg&pid=ImgRaw&r=0"
          alt=""
        />
        <button>
          {" "}
          <TfiWorld />
          English
        </button>
        <button>$ USD - U.S. Doollar</button>
        <button>united states</button>
      </div>
      <div className={styles.main_footer}>
        <ul>
          <li>Amazon Music Stream millions of songs</li>
          <li>Amazon Business Everything For Your Business</li>
          <li>Box Office Mojo Find Movie Box Office Data</li>
          <li>IMDbPro Get Info Entertainment Professionals Need</li>
          <li>Ring Smart Home Security Systems</li>
        </ul>

        <ul>
          <li>Amazon Advertising Find, attract, and engage customers</li>
          <li>AmazonGlobal Ship Orders Internationally</li>
          <li>ComiXology Thousands of Digital Comics</li>
          <li>
            Kindle Direct Publishing Indie Digital & Print Publishing Made Easy
          </li>
          <li>eero WiFi Stream 4K Video in Every Room</li>
        </ul>

        <ul>
          <li>6pm Score deals on fashion brands</li>
          <li>Home Services Experienced Pros Happiness Guarantee</li>
          <li>DPReview Digital Photography</li>
          <li>Prime Video Direct Video Distribution Made Easy</li>
          <li>Blink Smart Security for Every Home</li>
        </ul>

        <ul>
          <li>AbeBooks Books, art & collectibles</li>
          <li>Amazon Web Services Scalable Cloud Computing Services</li>
          <li>Fabric Sewing, Quilting & Knitting</li>
          <li>Shopbop Designer Fashion Brands</li>
          <li>Neighbors App Real-Time Crime & Safety Alerts</li>
        </ul>

        <ul>
          <li>ACX Audiobook Publishing Made Easy</li>
          <li> Audible Listen to Books & Original Audio Performances</li>
          <li>Goodreads Book reviews & recommendations</li>
          <li>Woot! Deals and Shenanigans</li>
          <li>
            Amazon Subscription Boxes Top subscription boxes – right to your
            door
          </li>
        </ul>

        <ul>
          <li>Sell on Amazon Start a Selling Account</li>
          <li>Book Depository Books With Free Delivery Worldwide</li>
          <li>IMDb Movies, TV & Celebrities</li>
          <li>Zappos Shoes & Clothing</li>
          <li>PillPack Pharmacy Simplified</li>
        </ul>
      </div>
      <div className={styles.contact}>
        <div>
          <p>condition of use</p>
          <p>privacy notice</p>
          <p>your ads privacy choice</p>
        </div>
        <p>
          © 1996-2023, Amazon.com, Inc. or its affiliates
          <br />
          by Shailja
        </p>
      </div>
    </footer>
  );
}

export default Footer;
