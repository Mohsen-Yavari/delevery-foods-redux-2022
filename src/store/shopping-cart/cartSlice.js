

import { createSlice } from "@reduxjs/toolkit";
import { hasFormSubmit } from "@testing-library/user-event/dist/utils";

const initialState = {
    cartItems: [],
    totalQuantity:0,
    totalAmount:0
}

const cartSlice = ({
    name: 'cart',
    initialState: initialState,

    reducers:{
        addItem(state,action){
            const newItem = action.payload
            const existingItem = state.cartItems.find(item => item.id ===
                newItem.id)
                state.totalQuantity++;

                if(!existingItem){
                    state.cartItems.push({
                        id: newItem.id,
                        title:newItem.title,
                        image01:newItem.image01,
                        price:newItem.price,
                        quantity:1,
                        totalPrice:newItem.totalPrice
                    })
                }

                else{
                    existingItem.quantity++
                    existingItem.totalPrice =Number(existingItem.totalPrice)
                    + Number(newItem.price)
                }

                state.totalAmount = state.cartItems.reduce((total,item)=>(
                    total + Number (item.price) * Number(item.quantity)
                ))
        }
    }
})

export const cartActions = cartSlice.actions
export default cartSlice;