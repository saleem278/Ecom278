import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51HCbm5LrJBbThTdEEcoYKnJCs76XKQm6Z48lYqqf2MYVFLiNld24kL3gI6DCNdrxhGfRCgyivBI6RYIM8y4kOqU600fQCI1Tvj";

  const onToken = (token) => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((res) => {
        alert("Payment Successful");
        
      })
      .catch((error) => {
        console.log("Payment Error: ", JSON.parse(error));
        alert("Issue with payment, use only test card.");
      });
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="Ecom278"
      billingAddress
      shippingAddress
      image="https://www.logopik.com/wp-content/uploads/edd/2018/07/Ecommerce-Logo-Vector.png"
      description={`Your total is ₹${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      currency="INR"
      stripeKey={publishableKey}
    />
  );
};
export default StripeCheckoutButton;
