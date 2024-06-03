import { createSlice } from "@reduxjs/toolkit";




const cardSlice= createSlice({
 name:'card',
 initialState:[],
 reducers:{
    addToCart(state,action){
      state.push(action.payload)
    },

    removeItem(state,action){
      return state.filter(item=>item.id !== action.payload)
    }
 }
})
export const{addToCart,removeItem}= cardSlice.actions;
export default cardSlice.reducer;