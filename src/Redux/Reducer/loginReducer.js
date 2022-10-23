import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { LoginAdmin, LoginUser, RegisterUser} from '../../Api_axios/userApi';

export const loginReducer = createSlice({ 
    name: 'login-change',
    initialState: {
        isOpenLogin: false,
        isOpenRegister: false,
        status: 'idle',
        message: '',
        success: false,
        firstName: '',
        lastName: '',
        token: '',
        expiresIn: 0,
        email: '',
        role: ''
    },
    reducers: {
       toggleLogin: (state) => {
            state.isOpenLogin = !state.isOpenLogin;
       },
       toggleRegister: (state) => {
        state.isOpenRegister = !state.isOpenRegister;
       }
    },
     extraReducers: builder => {
        builder
        .addCase(fetchLogin.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchLogin.fulfilled, (state, action) => {
            state.message = action.payload.message
            state.success = action.payload.success
            state.firstName = action.payload.firstName
            state.lastName = action.payload.lastName
            state.token = action.payload.token
            state.expiresIn = action.payload.expiresIn
            state.email = action.payload.email
            state.role = action.payload.role
            state.status = 'idle'
        })
        .addCase(fetchLogin.rejected, (state, action) => {
            state.message = action.payload.message
            state.success = action.payload.success
            state.status = 'idle'
        })
    }
})
export const fetchLogin = createAsyncThunk('post/fetchLogin', async (data,{ rejectWithValue }) => {
    try{
           let res = await LoginUser(data) 
            return res.data
        
    }catch(err){
        toast.error(err.response.data.message)
        return rejectWithValue(err.response.data)
    }
})

export const {
               toggleLogin,
               toggleRegister
                } = loginReducer.actions