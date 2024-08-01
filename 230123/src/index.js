import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import {createStore} from 'redux';

const height = 158;

function reducer(state = height,action) {
  if(action.type === '키크기'){
    state+=1;
    return state
  } else if (action.type === '키작아지기'){
    state-=1;
    return state
  } else
    return state;
}

let store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals();