import 'babel-polyfill';
import './main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import store from './store/store';

const render = () => {
  document.body.innerText = store.getState();
};

store.subscribe(render);

document.addEventListener('click', () => {
  store.dispatch({ type: 'INCREMENT' });
});

render();
