import React, {useEffect} from "react";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import {useDispatch, useSelector} from "react-redux";
import {Notification} from "./components/Notification";
import {uiActions} from "./store/ui-slice";
import {updateCartThunk} from "./store/cart-slice";

function App() {
  const dispatch = useDispatch();

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const cart = useSelector(state => state.cart);
  const notification = useSelector(state => state.ui.notification);

  useEffect(() => {

      if (cart.items.length) {
          dispatch(updateCartThunk(cart));
      }
  }, [cart, dispatch]);

  return (
    <div className="App">
      {notification && <Notification color={notification.type} message={notification.message} />}
      {!isLoggedIn && <Auth />}
      {isLoggedIn && <Layout />}
    </div>
  );
}

export default App;
