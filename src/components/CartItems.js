import React from "react";
import CartItem from "./CartItem";
import "../styles/Cart.css";
import {useSelector} from "react-redux";
const CartItems = () => {
  const items = useSelector(state => state.cart.items);

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <ul>
          <li>
              {items.map(item =>
                  <CartItem
                      key={item.id}
                      id={item.id}
                      price={item.price}
                      name={item.name}
                      quantity={item.quantity}
                      total={item.totalPriceItem}
                  />
              )}
          </li>
      </ul>
    </div>
  );
};

export default CartItems;
