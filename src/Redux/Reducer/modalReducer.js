import {createSlice} from '@reduxjs/toolkit';

export const modalReducer = createSlice({ 
    name: 'modal-change',
    initialState: {
        showLModal: false,
        title: '',
        content: '',
        url: '',
        price_1: 0,
        price_2: 0
    },
    reducers: {
        toggleModal: (state,action) => {
            state.showLModal = !state.showLModal;
        },
        changeData: (state,action) => {
            state.title = action.payload.title;
            state.content = action.payload.content;
            state.url = action.payload.url;
            state.price_1 = action.payload.price_1;
            state.price_2 = action.payload.price_2;
        }
    }
})
export const {toggleModal, changeData} = modalReducer.actions