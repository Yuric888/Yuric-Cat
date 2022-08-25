import { configureStore } from "@reduxjs/toolkit";
import { showReducer } from "../Reducer/reducer";
const store = configureStore({
    reducer: {
         reduce: showReducer.reducer
    }
})

export default store