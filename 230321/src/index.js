import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';

const weight = 100;
const height = 155;


function reducer1(state = weight, action) {
  if (action.type === 'plus') {
    state++;
    return state;
  } else if (action.type === 'minus') {
    state--;
    return state;
  } else {
    return state;
  }
}

function reducer2(state = height, action) {
  if (action.type === 'plusH') {
    state++;
    return state;
  } else if (action.type === 'minusH') {
    state--;
    return state;
  } else {
    return state;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
let store = createStore(combineReducers({reducer1 , reducer2}));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals();
