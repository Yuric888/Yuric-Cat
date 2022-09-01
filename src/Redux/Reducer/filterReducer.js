import {createSlice} from '@reduxjs/toolkit';

export const filterReducer = createSlice({ 
    name: 'filter',
    initialState: {
        valueSearch: '',
    },
    reducers: {
        changeFilter: (state, action) => {
            state.valueSearch = action.payload;
        },
       
    }
})
export const {changeFilter} = filterReducer.actions