import {
    createSlice
} from "@reduxjs/toolkit";
const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        add(state, action) {
            const existingItem = state.find(item => item.id === action.payload.id);

            if (existingItem) {
                existingItem.quantity += 1;  // Don't use return here
            } else {
                state.push({ ...action.payload, quantity: 1 }); // Add quantity property
            }
        }
        ,
        incrementQuantity(state, action) {
            const item = state.find(item => item.id === action.payload);
            if (item) {
                item.quantity += 1;
            }
        },
        decrementQuantity(state, action) {
            const item = state.find(item => item.id === action.payload);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
            }
        },
        remove(state, action) {
            return state.filter((item) => item.id !== action.payload)
        }


    }

})

export const { add, remove, incrementQuantity, decrementQuantity } = cartSlice.actions
export default cartSlice.reducer