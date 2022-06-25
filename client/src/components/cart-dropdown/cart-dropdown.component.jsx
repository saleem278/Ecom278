import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions.js";

import {
  CartDropdownContainer,
  CartDropdownButton,
  EmptyMessageContainer,
  CartItemsContainer,
} from "./cart-dropdown.styles";
import { selectCurrentUser } from "../../redux/user/user.selectors";

export const CartDropdown = ({ cartItems, history, dispatch,user }) => {
  const GotoCheckoutPage =()=>{
    // console.log(user);
    // console.log(cartItems);
    if(user===null){
      alert('Please Log in Before Checkout')
      console.log('not loggedIn');
    }else{
      history.push("/checkout");
      dispatch(toggleCartHidden());
    }
  }
  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
        )}
      </CartItemsContainer>
      <CartDropdownButton
        onClick={GotoCheckoutPage}
      >
        GO TO CHECKOUT
      </CartDropdownButton>
    </CartDropdownContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  user:selectCurrentUser
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
