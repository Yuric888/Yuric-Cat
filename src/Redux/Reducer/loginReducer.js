import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { refreshToken } from '../../Api_axios/axiosJWT';
import {LoginUser} from '../../Api_axios/userApi';

export const loginReducer = createSlice({ 
    name: 'login-change',
    initialState: {
        isOpenLogin: false,
        isOpenRegister: false,
        status: 'idle',
        message: null,
        success: false,
        userDetails: null,
    },
    reducers: {
       toggleLogin: (state) => {
            state.isOpenLogin = !state.isOpenLogin;
       },
       toggleRegister: (state) => {
        state.isOpenRegister = !state.isOpenRegister;
       },
       logoutUser: (state) => {
            state.userDetails = null
            state.message = null
            state.success= false
            toast.success("Log out successfully!")
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
            state.userDetails = action.payload.data
            state.status = 'idle'
            toast.success(state.message)
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

export const fetchRefreshToken = createAsyncThunk('post/fetchRefreshToken', async ({ rejectWithValue }) => {
    try{
           let res = await refreshToken() 
            return res.data
        
    }catch(err){
        toast.error(err.response.data.message)
        return rejectWithValue(err.response.data)
    }
})

export const {
               toggleLogin,
               toggleRegister,
               logoutUser,
                } = loginReducer.actions