import React, { Component } from 'react';
import TodoItemForm from './TodoItemForm';

class TodoItemFormContainer extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { inputValue: '' };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    let inputValue = event.target.value;
    this.setState({ inputValue });
  }

  handleFormSubmit(event) {
    const { store } = this.context;
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
TodoItemFormContainer.contextTypes = {
  store: React.PropTypes.object
};

export default TodoItemFormContainer;

