import { configureStore } from "@reduxjs/toolkit";
import cardSlice from "./cardSlice";

export const Store= configureStore({
    reducer:{
        card:cardSlice,
    }
})