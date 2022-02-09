import React from 'react';
import { connect } from 'react-redux';

import {
  clearItemFromCart,
  addItem,
  removeItem
} from '../../redux/cart/cart.actions';

import {
  CheckoutItemContainer,
  ImageContainer,
  TextContainer,
  QuantityContainer,
  RemoveButtonContainer
} from './checkout-item.styles';

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt='item' />
      </ImageContainer>
      <TextContainer>{name}</TextContainer>
      <QuantityContainer>
        <div style={{ border:"2px solid #E66B34",borderRadius:"100px",padding:"1px",marginTop:3}} onClick={() => removeItem(cartItem)}>➖</div>
        <span style={{fontWeight:"bold",marginTop:3,border:"2px solid #E66B34", padding:"1px 15px"}}>{quantity}</span>
        <div style={{borderRadius:"100px",border:"2px solid #E66B34",padding:"1px",marginTop:3}} onClick={() => addItem(cartItem)}>➕</div>
      </QuantityContainer>
      <TextContainer>₹{price}</TextContainer>
      <RemoveButtonContainer onClick={() => clearItem(cartItem)}>
        &#10005;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CheckoutItem);