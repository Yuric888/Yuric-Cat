import {createSlice} from '@reduxjs/toolkit';

export const modalReducer = createSlice({ 
    name: 'modal-change',
    initialState: {
        showLModal: false,
        showModalCard: false,
        itemModal: {
             title: '',
            content: '',
            url: '',
            price_1: 0,
            price_2: 0,
        },
        cards: [],
        
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
        toggleViewCard: (state,action) => {
            state.showModalCard = !state.showModalCard;
        },
        addCard: (state,action) => {
            const newCard = {
                title: action.payload.title,
                content: action.payload.content,
                url: action.payload.url,
                price_1: action.payload.price_1,
                price_2: action.payload.price_2
            }
            state.cards.push(newCard);
        },
        deleteCard: (state,action) => {
            const dataDelete = action.payload
           state.cards.splice(dataDelete, 1);
            console.log('newData', state.cards)
        }
    }
})
export const {
                toggleModal, 
                changeData, 
                toggleViewCard,
                addCard,
                deleteCard
                } = modalReducer.actions