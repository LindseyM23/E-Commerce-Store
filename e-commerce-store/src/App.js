import './App.css';
// import { BagProvider } from './redux/BagContext';
import { Provider } from 'react-redux';

// import { BrowserRouter } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './redux/store';



function App() {
  return (
   <Provider store={store}>
  <PersistGate loading={null} persistor={persistor}>

<Dashboard/>
   </PersistGate>
        
</Provider>
   
        
    
    
  );
}

export default App;
