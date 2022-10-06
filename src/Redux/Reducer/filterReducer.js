import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { getAllPost } from '../../Api_axios/postApi';

export const filterReducer = createSlice({ 
    name: 'filter',
    initialState: {
        valueSearch: '',
        status: 'idle', 
        dataItem: []
    },
    reducers: {
        changeFilter: (state, action) => {
            state.valueSearch = action.payload;
        },
       
    },
    extraReducers: builder => {
        builder.addCase(fetchPost.pending, (state, action) => {
            state.status = 'loading';
        }).addCase(fetchPost.fulfilled, (state, action) => {
            state.dataItem = action.payload
            state.status = 'idle'
        })
    }
});

export const fetchPost = createAsyncThunk('post/fetchPost', async () => {
    const res = await getAllPost();
    return res.data
})

export const {changeFilter} = filterReducer.actions