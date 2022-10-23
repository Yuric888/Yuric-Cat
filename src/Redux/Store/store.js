import { configureStore } from "@reduxjs/toolkit";
import { filterReducer } from "../Reducer/filterReducer";
import { loginReducer } from "../Reducer/loginReducer";
import { modalReducer } from "../Reducer/modalReducer";
import { showReducer } from "../Reducer/reducer";
import { registerReducer } from "../Reducer/registerReducer";
const store = configureStore({
    reducer: {
         reduce: showReducer.reducer,
         filter: filterReducer.reducer,
         modal: modalReducer.reducer,
         login: loginReducer.reducer,
         register: registerReducer.reducer
    }
})

export default store