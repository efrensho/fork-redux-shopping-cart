import React from "react";
import Header from "./Header";
import Products from "./Products";
import "./Layout.css";
import {useSelector} from "react-redux";
import CartItems from "./CartItems";
const Layout = () => {
  let total = 100;
  const items = useSelector((state) => state.cart.items);
  console.log(items);

  return (
    <React.Fragment>
      <div className="layout">
        <Header />
        <Products />
        <CartItems  />
        <div className="total-price">
          <h3>Total: ${total}</h3>
          <button className="orderBtn">Place Order</button>
        </div>{" "}
      </div>
    </React.Fragment>
  );
};

export default Layout;
