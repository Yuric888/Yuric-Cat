import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { filterReducer } from "../Reducer/filterReducer";
import { loginReducer } from "../Reducer/loginReducer";
import { modalReducer } from "../Reducer/modalReducer";
import { showReducer } from "../Reducer/reducer";
import { registerReducer } from "../Reducer/registerReducer";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
const reducer = combineReducers({
         reduce: showReducer.reducer,
         filter: filterReducer.reducer,
         modal: modalReducer.reducer,
         login: loginReducer.reducer,
         register: registerReducer.reducer
})
const config = {
  key: 'root',
  storage: storage,
  whitelist: ['login']
}
const persistedReducer = persistReducer(config, reducer)
const store = configureStore({
    reducer: persistedReducer
});
export const persistor = persistStore(store)
export default store