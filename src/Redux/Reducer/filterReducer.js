import {createSlice} from '@reduxjs/toolkit';

export const filterReducer = createSlice({ 
    name: 'filter',
    initialState: {
        valueSearch: '',
        dataItem: [{
  id: 1,
  url: "https://raw.githubusercontent.com/ThanhTrung05/react-hook-basic-with-yuric/main/Cat-himalayan(svg).svg",
  title: 'Cat 1',
  price_1: 2000000,
  price_2: 3000000,
  content: 'abc'
},{
  id: 2,
  url:"https://raw.githubusercontent.com/ThanhTrung05/react-hook-basic-with-yuric/main/Cat-himalayan(svg).svg",
  title: 'Cat 2',
  price_1: 2000000,
  content: 'abc'
},{
  id: 3,
  url:"https://raw.githubusercontent.com/ThanhTrung05/react-hook-basic-with-yuric/main/Cat-somali(svg).svg",
  title: 'Cat 3',
  price_1: 2000000,
  price_2: 3000000,
  content: 'abc'
},{
  id: 4,
      url:"https://raw.githubusercontent.com/ThanhTrung05/react-hook-basic-with-yuric/main/Cat-scotland_fold(svg).svg",
  title: 'Cat 4',
  price_1: 2000000,
  content: 'abc'
},{
  id: 5,
  url: "https://raw.githubusercontent.com/ThanhTrung05/react-hook-basic-with-yuric/main/Cat-ai_cap(sphynx).svg",
  title: 'Cat 5',
  price_1: 2000000,
  content: 'abc'
},{
  id: 6,
      url:"https://raw.githubusercontent.com/ThanhTrung05/react-hook-basic-with-yuric/main/Cat-angora-svg-3.svg",
  title: 'Cat 6',
  price_1: 2000000,
  price_2: 3000000,
  content: 'abc'
},{
  id: 7,
     url:"https://raw.githubusercontent.com/ThanhTrung05/react-hook-basic-with-yuric/main/Cat-angora-svg-3.svg",
  title: 'Cat 7',
  price_1: 2000000,
  content: 'abc'
},{
  id: 8,
    url:"https://raw.githubusercontent.com/ThanhTrung05/react-hook-basic-with-yuric/main/Cat-angora-svg-3.svg",
  title: 'Cat 8',
  price_1: 2000000,
  price_2: 3000000,
  content: 'abc'
},{
  id: 9,
    url:"https://raw.githubusercontent.com/ThanhTrung05/react-hook-basic-with-yuric/main/Cat-angora-svg-3.svg",
  title: 'Cat 9',
  price_1: 2000000,
  price_2: 3000000,
  content: 'abc'
},{
  id: 10,
    url:"https://raw.githubusercontent.com/ThanhTrung05/react-hook-basic-with-yuric/main/Cat-angora-svg-3.svg",
  title: 'Cat 10',
  price_1: 2000000,
  price_2: 3000000,
  content: 'abc'
},{
  id: 11,
      url:"https://raw.githubusercontent.com/ThanhTrung05/react-hook-basic-with-yuric/main/Cat-angora-svg-3.svg",
  title: 'Cat 11',
  price_1: 2000000,
  price_2: 3000000,
  content: 'abc'
},{
  id: 12,
    url:"https://raw.githubusercontent.com/ThanhTrung05/react-hook-basic-with-yuric/main/Cat-angora-svg-3.svg",
  title: 'Cat 12',
  price_1: 2000000,
  price_2: 3000000,
  content: 'abc'
},]
    },
    reducers: {
        changeFilter: (state, action) => {
            state.valueSearch = action.payload;
        },
       
    }
})
export const {changeFilter} = filterReducer.actions