import {createSlice} from '@reduxjs/toolkit';

export const showReducer = createSlice({ 
    name: 'porduct-change',
    initialState: {
        showLayout: false,
        currentPage: 1,
    },
    reducers: {
        changeLayout: (state) => {
            state.showLayout = !state.showLayout;
        },
       changePage: (state, action) => {
        state.currentPage = action.payload
       },
       backPage: (state,action) => {
        state.currentPage = state.currentPage - 1
       },
       nextPage: (state,action) => {
        state.currentPage = state.currentPage + 1
       }
    }
})
export const {changeLayout,changePage,backPage,nextPage} = showReducer.actions