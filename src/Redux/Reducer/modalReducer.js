import {createSlice} from '@reduxjs/toolkit';

export const modalReducer = createSlice({ 
    name: 'modal-change',
    initialState: {
        showLModal: false,
    },
    reducers: {
        toggleModal: (state,action) => {
            state.showLModal = !state.showLModal;
        },
    }
})
export const {toggleModal} = modalReducer.actions