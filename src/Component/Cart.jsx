import React , {useEffect,useState }from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import SecondNav from "./SecondNav";
import { useSelector, useDispatch } from "react-redux";
import { removeProducts } from "../redux/createSlice";
import styles from "./cart.module.css";
import { totalAmount } from "../redux/createSlice";
import {FaRupeeSign} from "react-icons/fa"




function Cart() {
   const [amount , setAmount] = useState(0)
  const dispatch = useDispatch();
  const productCart = useSelector((state) => state.amazon);
  
  console.log(amount)
  console.log(productCart);
  const removeFromCart = (el) => {
    dispatch(removeProducts(el));
    console.log(dispatch(removeProducts(el)));
   
  };
  // useEffect(() => {
  //  setAmount(dispatch(totalAmount(productCart.card)))
  // },[])

 

  return (
    <div>
      <Navbar />
      <SecondNav />
      <div className={styles.cart_container}>
        <div className={styles.cart_element}>
          <h1>Shopping Cart</h1>
          { 
          productCart.card?.map((el) => {
            return (
              <div key={el.id} className={styles.element_details}>
                <div className={styles.Cart_img}>
                  {" "}
                  <img src={el.Image} alt="" />
                </div>
                <div className={styles.Cart_details}>
                  <h6>{el.title}</h6>
                  <p>{el.discount}</p>
                  <p> <FaRupeeSign/>
                    {el.price}</p>
                  <p>
                    <strong>Size</strong>:M
                  </p>
                  <div className={styles.quantity}>
                    <select name="all" id="category">
                      <option value="olvov">1</option>
                      <option value="saab">2</option>
                      <option value="mercedes">3</option>
                      <option value="audi">4</option>
                      <option value="volvo">5</option>
                      <option value="saab">6</option>
                      <option value="mercedes">7</option>
                    </select>

                    <button>Delete</button>
                  </div>
                  <button onClick={() => removeFromCart(el)}>
                    remove from cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className={styles.payment_box}>
          <h5>
            Subtotal({!productCart.card ? 0:productCart.card.length} items) : <h3>{productCart.card.reduce((acc , curr) => acc + curr.price,0)}</h3>
          </h5>
          <Link to = "/payment" className={styles.link}>Proceed to Buy</Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;
