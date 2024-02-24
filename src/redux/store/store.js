import { configureStore } from "@reduxjs/toolkit";
import boardsSlice from '../slices/BoardsSlice.js';
const store =configureStore({
    reducer:{
       boards:boardsSlice
    },

})

export default store;