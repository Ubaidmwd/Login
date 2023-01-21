import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "../reducers/counter";

export const store= configureStore({
    reducer:{counter:counterSlice},

})