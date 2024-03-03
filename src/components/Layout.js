import React from "react";
import Header from "./Header";
import Products from "./Products";
import "../styles/Layout.css";
import {useSelector} from "react-redux";
import CartItems from "./CartItems";
const Layout = () => {
  const items = useSelector((state) => state.cart.items);
  const showCart = useSelector(state => state.cart.showCart);
  const totalPrice = useSelector(state => state.cart.totalPrice);

  console.log(items);

  return (
    <React.Fragment>
      <div className="layout">
        <Header />
        {!showCart && <Products />}
        {showCart &&
            <>
              <CartItems  />
              <div className="total-price">
                <h3>Total: ${totalPrice}</h3>
                <button className="orderBtn">Place Order</button>
              </div>
            </>
        }
      </div>
    </React.Fragment>
  );
};

export default Layout;
