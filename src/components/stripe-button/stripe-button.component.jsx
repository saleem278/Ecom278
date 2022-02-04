import React from "react";
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton =({price})=>{
    const priceForStripe =price*100;
    const publishableKey = 'pk_test_51HCbm5LrJBbThTdEEcoYKnJCs76XKQm6Z48lYqqf2MYVFLiNld24kL3gI6DCNdrxhGfRCgyivBI6RYIM8y4kOqU600fQCI1Tvj';

    const onToken = token=>{
        console.log(token);
    }
    return(
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
        currency="inr"
        stripeKey={publishableKey}

        />
    )
}
export default StripeCheckoutButton;