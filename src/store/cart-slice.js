import {createSlice} from "@reduxjs/toolkit";

/*items : {
    id,
    name,
    price
    quantity
}*/

const cartSlice = createSlice(({
    name: 'cart',
    initialState: {
        items: [],
        totalQty: 0,
        showCart: false
    },
    reducers: {
        add(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id)

            if (existingItem) {
                existingItem.quantity++;
                existingItem.price += newItem.price;
            } else {
                state.items.push({
                    ...newItem,
                    quantity: 1
                })
            }
            state.totalQty += newItem.price;
        },
        remove() {},
        showCart(state) {
            state.showCart = true;
        }
    }
}))

export const cartActions = cartSlice.actions;
export default cartSlice;