import React, {useEffect} from "react";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import {useDispatch, useSelector} from "react-redux";
import {Notification} from "./components/Notification";
import {uiActions} from "./store/ui-slice";

function App() {
  const dispatch = useDispatch();

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const cart = useSelector(state => state.cart);
  const notification = useSelector(state => state.ui.notification);

  useEffect(() => {
    const fetchItems = async () => {
      dispatch(uiActions.showNotification({
       open: true,
       message: "Adding item",
       type: "warning"
      }));
      const res = await fetch('https://redux-tutorial-yt-fcc-default-rtdb.firebaseio.com/cartItems.json', {
        method: 'PUT',
        body: JSON.stringify(cart)
      });

      return res.json();
    };

    if (cart.items.length) {
        fetchItems()
            .then(data => {
              dispatch(uiActions.showNotification({
                type: "success",
                message: "Item successfully added",
                open: true
              }))
            })
            .catch(e => {
              dispatch(uiActions.showNotification({
                type: "error",
                message: "Error adding item" + e,
                open: true
              }))
            });
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
