import 'babel-polyfill';
import './main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import CounterContainer from './components/CounterContainer';

ReactDOM.render(
  <CounterContainer />,
  document.getElementById('app')
);
