import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './containers/App';

import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers'
const store = createStore(reducers);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);


reportWebVitals();
/*
  Provider는 react-redux라이브러리에 내장되어있으며
  리액트 앱에 스토어를 손쉽게 연동할 수 있도록 도와주는 컴포넌트 입니다.
  이 컴포넌트를 불러온 다음 연동할 컴포넌트를 감싸준 다음
  Provider 컴포넌트의 props로 store값을 설정해주면 됩니다.
*/