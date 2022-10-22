import {createSlice} from '@reduxjs/toolkit';

export const loginReducer = createSlice({ 
    name: 'login-change',
    initialState: {
        isOpenLogin: false,
        isOpenRegister: false
    },
    reducers: {
       toggleLogin: (state) => {
            state.isOpenLogin = !state.isOpenLogin;
       },
       toggleRegister: (state) => {
        state.isOpenRegister = !state.isOpenRegister;
       }
    }
})
export const {
               toggleLogin,
               toggleRegister
                } = loginReducer.actions