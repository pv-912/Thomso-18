import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import $ from 'jquery';
import {Provider} from 'react-redux';

import store from './store.js';


import style from './src/css/style.css'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);