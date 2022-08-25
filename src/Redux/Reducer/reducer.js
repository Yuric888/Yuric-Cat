import {createSlice} from '@reduxjs/toolkit';

export const showReducer = createSlice({ 
    name: 'porduct-change',
    initialState: {
        showLayout: false
    },
    reducers: {
        changeLayout: (state, action) => {
            state.showLayout = !state.showLayout;
        },
       
    }
})
export const {changeLayout} = showReducer.actions