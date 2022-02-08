const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

if (process.env.NODE_ENV !== "production") require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const app = express();

const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

app.post("/payment", (req, res) => {
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: "inr",
  };
  stripe.charges.create(body, (strErr, strRes) => {
    if (strErr) {
      res.status(500).send({ error: strErr });
    } else {
      res.status(200).send({ success: strRes });
    }
  });
});

app.listen(port, (error) => {
  if (error) throw error;
  console.log("Server running on " + port);
});
