import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: ["burger", "pizza"]
    },
    reducers:{
        addItems:(state, actions)=>{
            addItems(state.items.push(actions.payload))
        },
        removeItems: (state)=>{
            removeItems(state.items.pop())
        },
        clearCart: (state)=>{
            clearCart(state.items.length=0)
        }
    }
})

export const {addItems, removeItems, clearCart} = cartSlice.actions;
export default cartSlice.reducer;