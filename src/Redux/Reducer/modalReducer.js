import {createSlice} from '@reduxjs/toolkit';

export const modalReducer = createSlice({ 
    name: 'modal-change',
    initialState: {
        showLModal: false,
        itemModal: {
             title: '',
            content: '',
            url: '',
            price_1: 0,
            price_2: 0,
        },
        cards: []
    },
    reducers: {
        toggleModal: (state) => {
            state.showLModal = !state.showLModal;
        },
        changeData: (state,action) => {
            state.itemModal.title = action.payload.title;
            state.itemModal.content = action.payload.content;
            state.itemModal.url = action.payload.url;
            state.itemModal.price_1 = action.payload.price_1;
            state.itemModal.price_2 = action.payload.price_2;
        },
        
    }
})
export const {toggleModal, changeData} = modalReducer.actions