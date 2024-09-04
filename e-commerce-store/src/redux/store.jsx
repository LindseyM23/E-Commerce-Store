import { configureStore } from '@redux/js/toolkit'
import counterReducer from './CounterSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
 
const store = configureStore({
    reducer:{
        counter : counterRedducer
    }
});

export default store;