import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { RegisterUser} from '../../Api_axios/userApi';

export const registerReducer = createSlice({ 
    name: 'login-change',
    initialState: {
        status: 'idle',
        message: '',
        success: false,
    },
    reducers: {
    },
     extraReducers: builder => {
        builder
        .addCase(fetchRegister.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchRegister.fulfilled, (state, action) => {
            state.message = action.payload.message
            state.success = action.payload.success
            state.status = 'idle'
        })
        .addCase(fetchRegister.rejected, (state, action) => {
            state.message = action.payload.message
            state.success = action.payload.success
            state.status = 'idle'
        })
    }
})

export const fetchRegister = createAsyncThunk('post/fetchRegister', async (data,{ rejectWithValue }) => {
    try{
           let res = await RegisterUser(data) 
            return res.data
    }catch(err){
        toast.error(err.response.data.message)
        return rejectWithValue(err.response.data)
    }
})
export const {
                } = registerReducer.actions
