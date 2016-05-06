import React, { Component } from 'react';
import FilterLinks from './FilterLinks';
import TodoItemList from './TodoItemList';
import TodoItemForm from './TodoItemForm';
import store from '../store/store';

class TodoApp extends Component {
  constructor(props) {
    super(props);
    let { todos, visibilityFilter } = store.getState();
    this.state = { todos, visibilityFilter, inputValue: '' };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleItemClick = this.handleItemClick.bind(this);
    this.handleFilterLinkClick = this.handleFilterLinkClick.bind(this);
  }

  componentDidMount() {
    let removeTodosListener = store.subscribe(() => {
      let { todos, visibilityFilter } = store.getState();
      this.setState({ todos, visibilityFilter });
    });

    this.setState({ removeTodosListener });
  }

  componentWillUnmount() {
    this.state.removeTodosListener();
  }

  handleInputChange(event) {
    let inputValue = event.target.value;
    this.setState({ inputValue });
  }

  handleFormSubmit(event) {
    event.preventDefault();
    const { inputValue } = this.state;
    this.setState({ inputValue: '' });
    store.dispatch({
      type: 'ADD_TODO',
      text: inputValue,
      id: Date.now()
    });
  }

  handleItemClick(id) {
    store.dispatch({
      type: 'TOGGLE_TODO',
      id
    });
  }

  handleFilterLinkClick(event, filter) {
    event.preventDefault();
    store.dispatch({
      type: 'SET_VISIBILITY_FILTER',
      filter
    });
  }

  render() {
    const { inputValue, todos, visibilityFilter } = this.state;
    let filters = [
      { filter: 'SHOW_ALL', text: 'All' },
      { filter: 'SHOW_ACTIVE', text: 'Active' },
      { filter: 'SHOW_COMPLETED', text: 'Completed' }
    ];

    let visibleTodos;
    switch (visibilityFilter) {
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

    return (
      <div>
        <TodoItemForm
          inputValue={inputValue}
          onInputChange={this.handleInputChange}
          onFormSubmit={this.handleFormSubmit}
        />
        <TodoItemList
          todos={visibleTodos}
          onItemClick={this.handleItemClick}
        />
        <FilterLinks
          currentFilter={visibilityFilter}
          filters={filters}
          onFilterLinkClick={this.handleFilterLinkClick}
        />
      </div>
    );
  }
}

export default TodoApp;
