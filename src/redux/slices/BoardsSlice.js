import { createSlice } from "@reduxjs/toolkit";
import data from '../../data/data.json';

const boardsSlice = createSlice({
    name:'boards',
    initialState:data.boards,
    reducers:{
        //Functionalities.
    }
})

export default boardsSlice;