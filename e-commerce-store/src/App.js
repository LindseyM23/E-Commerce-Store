import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Checkout from './Checkout';

ReactDOM.render(
  <Provider store={store}>
    <Checkout />
  </Provider>,
  document.getElementById('root')
);
