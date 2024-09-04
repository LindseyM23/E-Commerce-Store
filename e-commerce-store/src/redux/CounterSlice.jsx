import { createSlice } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux';

const counterSlice = createSlice({
    name: "Counter",
    initialState:{
        count:0
    },
    reducers:{
        increment(state)
{
    state.count +=1
}, 
decrement(state){
    state.count -=1
},
reset(state){
    state.count = 0
}
    }

})

export const {increment,decrement,reset} = counterSlice.actions
export default counterSlice.reducer