import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoItemForm from './TodoItemForm';
import addTodo from '../actions/addTodo';

class TodoItemFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { inputValue: '' };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleInputChange(event) {
    let inputValue = event.target.value;
    this.setState({ inputValue });
  }

  handleFormSubmit(event) {
    event.preventDefault();
    const { dispatch } = this.props;
    const { inputValue } = this.state;
    dispatch(addTodo(inputValue));
    this.setState({ inputValue: '' });
  };

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

TodoItemFormContainer = connect()(TodoItemFormContainer);
export default TodoItemFormContainer;

