import React from "react";
import { useDispatch } from "react-redux";
import "../styles/Cart.css";
import {cartActions} from "../store/cart-slice";

const CartItem = (props) => {
  const { name, quantity, total, price, id } = props;
  const dispatch = useDispatch();
  const removeItem = () => dispatch(cartActions.remove(id));
  const addItem = () => dispatch(cartActions.add({ id, name, price }));

  return (
    <div className="cartItem">
      <h2>{name}</h2>
      <p>${price} /-</p>
      <p>x{quantity}</p>
      <article>Total ${total}</article>
      <button className="cart-actions" onClick={removeItem}>
        -
      </button>
      <button className="cart-actions" onClick={addItem}>
        +
      </button>
    </div>
  );
};

export default CartItem;
