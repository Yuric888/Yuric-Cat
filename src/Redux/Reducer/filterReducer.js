import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { getAllPost } from '../../Api_axios/postApi';

export const filterReducer = createSlice({ 
    name: 'filter',
    initialState: {
        status: 'idle', 
        dataItem: [],
        dataFilter: []
    },
    reducers: {
        changeFilter: (state, action) => {
            state.dataItem = state.dataFilter.filter((item) =>
            item.title.toLowerCase().includes(action.payload.toLowerCase())
    ); 
        },
       
    },
    extraReducers: builder => {
        builder.addCase(fetchPost.pending, (state, action) => {
            state.status = 'loading';
        }).addCase(fetchPost.fulfilled, (state, action) => {
            state.dataItem = action.payload
            state.dataFilter = action.payload
            state.status = 'idle'
        })
    }
});

export const fetchPost = createAsyncThunk('post/fetchPost', async () => {
    const res = await getAllPost();
    return res.data
})

export const {changeFilter} = filterReducer.actions