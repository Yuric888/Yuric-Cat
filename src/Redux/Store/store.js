import { configureStore } from "@reduxjs/toolkit";
import { filterReducer } from "../Reducer/filterReducer";
import { showReducer } from "../Reducer/reducer";
const store = configureStore({
    reducer: {
         reduce: showReducer.reducer,
         filter: filterReducer.reducer
    }
})

export default store