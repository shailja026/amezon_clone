import React, { useState, useEffect } from "react";
import { BsFillBagCheckFill } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { MdCancel } from "react-icons/md";
import { GrRadialSelected } from "react-icons/gr";
import styles from "./payment.module.css";
import { useSelector, useDispatch } from "react-redux";
import instance from "../axios";
import axios from "axios";
import { auth } from "../../firebase";
import { FaRupeeSign } from "react-icons/fa";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { empatyBag } from "../../redux/createSlice";
import { useNavigate } from "react-router-dom";
import { removeProducts } from "../../redux/createSlice";
import { BsFillStarFill } from "react-icons/bs";
function Payment() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const stripe = useStripe();
  const element = useElements();
  const cart = useSelector((state) => state.amazon.card);
  const [address, setAddress] = useState({});
  const [name, setName] = useState("");
  const [user, setUser] = useState(false);
  const [err, setErr] = useState(null);
  const [disable, setDisable] = useState(true);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [clientSecret, setClientSecret] = useState(true);
  // const Rating = Math.floor(cart.rating);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setName(user.displayName);
        setUser(true);
      } else {
        setName("Guest");
      }
    });
  }, []);
  useEffect(() => {
    getLocation();
  }, []);

  const removeFromCart = (el) => {
    dispatch(removeProducts(el));
    console.log(dispatch(removeProducts(el)));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);
    console.log(stripe);
    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: element.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        console.log(paymentIntent, "intent");
        setSucceeded(true);
        setErr(null);
        setProcessing(false);
        dispatch(empatyBag());
        navigate("/");
      })
      .catch((err) => console.log(err.message));
  };

  useEffect(() => {
    let amount = cart?.reduce((acc, curr) => acc + curr.price, 0) * 100;
    const getClientSecret = async () => {
      try {
        const response = await instance({
          method: "POST",
          url: `/payments/create?total=${amount}`,
        });
        console.log("secretttttt:", response.data);
        setClientSecret(response.data.clientSecret);
      } catch (err) {
        console.log("someErr", err);
      }
    };
    getClientSecret();
  }, [cart]);

  const getLocation = async () => {
    const location = await axios.get("https://ipapi.co/json/");
    console.log(location.data);
    setAddress(location.data);
  };

  const handleChange = (e) => {
    // setDisable(false)
    setDisable(e.empty);
    setErr(e.err ? e.err.message : "");
  };
  return (
    <div>
      <nav className={styles.navbar}>
        <img
          src="data:image/png;base64,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"
          alt=""
        />
        <h3>Checkout</h3>
        <BsFillBagCheckFill />
      </nav>
      <div>
        <div className={styles.payment_method}>
          <form action="" onSubmit={handleSubmit}>
            <CardElement onChange={handleChange} />
            {/* <button>Pay</button> */}
            <div className={styles.payment_amount}>
              total : {cart?.reduce((acc, curr) => acc + curr.price, 0)}
              <button
                disabled={processing || disable || succeeded}
                type="submit"
              >
                <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
              </button>
              {err && <div>{err}</div>}
            </div>
          </form>
        </div>
        <div className={styles.whole_info}>
          <div className={styles.address}>
            <div>
              <h3>Select your delivery address</h3>
              <MdCancel />
            </div>
            <div className={styles.auto_fill}>
              {user ? (
                <div className={styles.user}>
                  <h5>Your address</h5> <br />
                  <h6>
                    {" "}
                    <GrRadialSelected /> {name} , {address.city}{" "}
                    {address.postal} {address.region} {address.country_name}
                  </h6>
                </div>
              ) : (
                ""
              )}
            </div>
            <button>
              <AiOutlinePlus /> Add new address
            </button>{" "}
            <br />
            <button className={styles.btn}>Use this address</button>
          </div>

          <div className={styles.delivery_items}>
            {cart?.map((el) => (
              <div className={styles.cards}>
                {" "}
                <img src={el.Image} alt="" />
                <div className={styles.Cart_details}>
                  <h6>{el.title}</h6>
                  <p>{el.discount}</p>
                  <p>
                    {" "}
                    <FaRupeeSign />
                    {el.price}
                  </p>
                  <div className={styles.rating}>
                    {Array(Math.floor(el.rating))
                      .fill()
                      .map((_, i) => (
                        <p className={styles.rating}>
                          <BsFillStarFill />
                        </p>
                      ))}
                  </div>
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
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
