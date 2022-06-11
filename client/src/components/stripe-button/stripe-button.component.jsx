import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { clearCart } from "../../redux/cart/cart.actions";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";
const StripeCheckoutButton = ({ price,clearCart }) => {
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
        clearCart();
      })
      .catch((error) => {
        console.log("Payment Error: ", JSON.parse(error));
        alert("Issue with payment, use only test card.");
      });
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="WonderBox ECOM"
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
const mapDispatchToProps = (dispatch) => ({
  clearCart: () => dispatch(clearCart()),
});
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps, mapDispatchToProps)(StripeCheckoutButton);
