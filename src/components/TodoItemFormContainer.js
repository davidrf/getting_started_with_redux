import React, { Component } from 'react';
import TodoItemForm from './TodoItemForm';
import store from '../store/store';

class TodoItemFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { inputValue: '' };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
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

  render() {
    const { inputValue } = this.state;

    return (
      <TodoItemForm
        inputValue={inputValue}
        onInputChange={this.handleInputChange}
        onFormSubmit={this.handleFormSubmit}
      />
    );
  }
}

export default TodoItemFormContainer;

