import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoItemList from './TodoItemList';
import toggleTodo from '../actions/toggleTodo';

const determineVisibleTodos = (todos, filter) => {
  let visibleTodos;
  switch (filter) {
    case 'SHOW_ALL':
      visibleTodos = todos;
      break;
    case 'SHOW_ACTIVE':
      visibleTodos = todos.filter(todo => !todo.completed);
      break;
    case 'SHOW_COMPLETED':
      visibleTodos = todos.filter(todo => todo.completed);
      break;
  }
  return visibleTodos;
};

const mapStateToProps = state => {
  return {
    todos: determineVisibleTodos(state.todos, state.visibilityFilter)
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onItemClick(id) {
      dispatch(toggleTodo(id));
    }
  }
};

const TodoItemListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoItemList);

export default TodoItemListContainer;
