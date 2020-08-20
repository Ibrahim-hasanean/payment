const express = require("express");
const app = express();
const bodyParser = require("body-parser");
require("dotenv").config();
const stripe = require("stripe")(process.env.STRIP_SECRET_KEY);
const cors = require("cors");
require("./config/mongoose");
app.use(bodyParser.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("home page");
});

app.post("/payment", (req, res) => {
  //console.log(req.body.token);
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: "usd",
  };
  stripe.charges.create(body, (err, result) => {
    if (err) {
      throw new Error(err.message);
      return res.status(400).send(err);
    }
    console.log(result.status);
    res.send(result);
  });
});
console.log("ibrahim");

app.listen(8000, () => {
  console.log("server on 8000");
});
