import {createSlice} from "@reduxjs/toolkit";

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
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id);

            if (existingItem.quantity === 1) {
                state.items = state.items.filter(item => item.id !== id);
            } else{
                existingItem.quantity--;
                existingItem.totalPriceItem -= existingItem.price;
            }
        },
        showCart(state) {
            state.showCart = !state.showCart;
        }
    }
}))

export const cartActions = cartSlice.actions;
export default cartSlice;