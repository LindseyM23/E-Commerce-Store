import { createSlice } from '@reduxjs/toolkit'
// import { useDispatch, useSelector } from 'react-redux';

const bagSlice = createSlice({
    name: "bag",
    initialState:{
        items:[]
    },
    reducers:{
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
      
    removeItem: (state, action) => {
        state.items = state.items.filter(item => item !== action.payload);
}, 
    },
});


export const {addItem, removeItem} = bagSlice.actions
export default bagSlice.reducer