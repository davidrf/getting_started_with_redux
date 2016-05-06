import React, { Component } from 'react';
import FilterLinksContainer from './FilterLinksContainer';
import TodoItemListContainer from './TodoItemListContainer';
import TodoItemFormContainer from './TodoItemFormContainer';
import store from '../store/store';

const TodoApp = props => {
  return (
    <div>
      <TodoItemFormContainer />
      <TodoItemListContainer />
      <FilterLinksContainer />
    </div>
  );
};

export default TodoApp;
