import { configureStore } from '@reduxjs/toolkit';
import bagReducer from './BagSlice'; 
import { persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { loadState, saveState } from '../redux/localStorage';

// Persist configuration
const persistConfig = {
  key: 'root', // the key to persist
  storage, // define storage (localStorage)
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, bagReducer);

const store = configureStore({
  reducer: {
    bag: persistedReducer, // Use persistedReducer here
  },
  preloadedState: loadState(), // Load preloaded state
});

store.subscribe(() => {
  saveState(store.getState());
});

// Create a persistor
export const persistor = persistStore(store);

export default store;
