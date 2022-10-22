import { configureStore } from "@reduxjs/toolkit";
import { filterReducer } from "../Reducer/filterReducer";
import { loginReducer } from "../Reducer/loginReducer";
import { modalReducer } from "../Reducer/modalReducer";
import { showReducer } from "../Reducer/reducer";
const store = configureStore({
    reducer: {
         reduce: showReducer.reducer,
         filter: filterReducer.reducer,
         modal: modalReducer.reducer,
         login: loginReducer.reducer
    }
})

export default store