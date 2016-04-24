import 'babel-polyfill';
import './main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import store from './store/store';

console.log(store.getState());
store.dispatch({
  type: 'ADD_TODO',
  id: 0,
  text: 'Learn Redux'
});
console.log(store.getState());
store.dispatch({
  type: 'TOGGLE_TODO',
  id: 0
});
console.log(store.getState());
store.dispatch({
  type: 'SET_VISIBILITY_FILTER',
  filter: 'meow'
});
console.log(store.getState());
