import {createSlice} from "@reduxjs/toolkit";
import {uiActions} from "./ui-slice";

/*items : {
    id,
    name,
    price
    quantity,
    totalPriceItem
}*/

const cartSlice = createSlice(({
    name: 'cart',
    initialState: {
        items: [],
        totalPrice: 0,
        showCart: false,
        totalQty: 0
    },
    reducers: {
        add(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id)

            if (existingItem) {
                existingItem.quantity++;
                existingItem.totalPriceItem += newItem.price;
            } else {
                state.items.push({
                    ...newItem,
                    quantity: 1,
                    totalPriceItem: newItem.price
                })
            }
            state.totalQty++;
            state.totalPrice += newItem.price;
        },
        remove(state, action) { // payload === id
            const { payload: id} = action;
            const existingItem = state.items.find(item => item.id === id);

            if (existingItem.quantity === 1) {
                state.items = state.items.filter(item => item.id !== id);
            } else{
                existingItem.quantity--;
                existingItem.totalPriceItem -= existingItem.price;
            }

            state.totalQty--;
            state.totalPrice -= existingItem.price;
            },
        showCart(state) {
            state.showCart = !state.showCart;
        }
    }
}))

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

export const cartActions = cartSlice.actions;
export default cartSlice;