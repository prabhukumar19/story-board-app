import { configureStore } from "@reduxjs/toolkit";
import boardsSlice from "../slices/BoardsSlice";

const store = configureStore({
  reducer: {
    boards: boardsSlice.reducer,
  }
})

export default store