const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const stripe = require("stripe")(process.env.SECRET_KEY);

// api*******

const app = express();

// middleware*****
app.use(cors());
app.use(express.json());

// api route******;
app.get("/", (request, response) => response.status(200).send("hello shailja"));

app.post(`/payments/create`, async (request, response) => {
  try {
    const total = request.query.total;
    console.log("recieved", total);
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total,
      currency: "INR",
    });
    response.status(200).send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (err) {
    console.log(err);
    response.status(500).send({
      error: "An error occurred while processing the payment.",
    });
  }
});

// listen command*******;

exports.api = functions.https.onRequest(app);

// endpoint****
// http://127.0.0.1:5001/fir-ce83e/us-central1/api
