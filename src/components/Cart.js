import React from "react";
import "./Cart.css";
import {useDispatch, useSelector} from "react-redux";
import {cartActions} from "../store/cart-slice";
const Cart = () => {
  const totalQty = useSelector(state => state.cart.totalQty);
  const dispatch = useDispatch();
  const handleShowCart = () => {
    dispatch(cartActions.showCart());
  }

  return (
    <div className="cartIcon">
      <h3 onClick={handleShowCart}>Cart: {totalQty} Items </h3>
    </div>
  );
};

export default Cart;
