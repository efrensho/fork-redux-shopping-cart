import {uiActions} from "../ui-slice";
import {cartActions} from "../cart-slice";

export const updateCartThunk = (cart) =>
    async (dispatch, getState) => {
        dispatch(uiActions.showNotification({
            open: true,
            message: "Adding item",
            type: "warning"
        }));

        const updateCart = async () => {
            const res = await fetch('https://redux-tutorial-yt-fcc-default-rtdb.firebaseio.com/cartItems.json', {
                method: 'PUT',
                body: JSON.stringify(cart)
            });

            const data = res.json();
            dispatch(uiActions.showNotification({
                type: "success",
                message: "Item successfully added",
                open: true
            }))

        };

        try {
            await updateCart();
        } catch (e) {
            dispatch(uiActions.showNotification({
                type: "error",
                message: "Error adding item" + e,
                open: true
            }))
        }
    }

export const fetchItems = () => {
    return async (dispatch, getState) => {
        const fetchItemsRequest = async () => {
            const res = await fetch("https://redux-tutorial-yt-fcc-default-rtdb.firebaseio.com/cartItems.json");
            return res.json();
        }

        try {
            const cartData = await fetchItemsRequest();
            dispatch(cartActions.replaceData(cartData));
        } catch (err) {
            dispatch(uiActions.showNotification({
                type: "error",
                message: "Erro while fetching items" + err,
                open: true
            }))
        }

    }
}