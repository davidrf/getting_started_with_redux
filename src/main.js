import 'babel-polyfill';
import './main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import Provider from './components/Provider';
import TodoApp from './components/TodoApp';
import store from './store/store';

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('app')
);
