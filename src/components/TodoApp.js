import React, { Component } from 'react';
import TodoItemList from './TodoItemList';
import TodoItemForm from './TodoItemForm';
import store from '../store/store';

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: [], inputValue: '' };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  componentDidMount() {
    let removeTodosListener = store.subscribe(() => {
      this.setState({
        todos: store.getState().todos
      });
    });

    this.setState({
      todos: store.getState().todos,
      removeTodosListener
    });
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

  render() {
    const { inputValue, todos } = this.state;

    return (
      <div>
        <TodoItemForm
          inputValue={inputValue}
          onInputChange={this.handleInputChange}
          onFormSubmit={this.handleFormSubmit}
        />
        <TodoItemList
          todos={todos}
          onItemClick={this.handleItemClick}
        />
      </div>
    );
  }
}

export default TodoApp;
