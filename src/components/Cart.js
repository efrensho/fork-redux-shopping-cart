import React from "react";
import "./Cart.css";
import {useSelector} from "react-redux";
const Cart = () => {
  const totalQty = useSelector(state => state.cart.totalQty);
  const totalPrice = useSelector(state => state.cart.totalPrice);
  return (
    <div className="cartIcon">
      <h3>Cart: {totalQty} Items - Price: {totalPrice}</h3>
    </div>
  );
};

export default Cart;
