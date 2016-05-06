import React, { Component } from 'react';
import TodoItemList from './TodoItemList';

class TodoItemListContainer extends Component {
  constructor(props, context) {
    super(props, context);
    const { store } = this.context;
    const { todos, visibilityFilter } = store.getState();
    this.state = { todos, visibilityFilter };
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  componentDidMount() {
    const { store } = this.context;
    let removeTodosListener = store.subscribe(() => {
      let { todos, visibilityFilter } = store.getState();
      this.setState({ todos, visibilityFilter });
    });

    this.setState({ removeTodosListener });
  }

  componentWillUnmount() {
    this.state.removeTodosListener();
  }

  handleItemClick(id) {
    const { store } = this.context;
    store.dispatch({
      type: 'TOGGLE_TODO',
      id
    });
  }

  render() {
    const { todos, visibilityFilter } = this.state;

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
      <TodoItemList
        todos={visibleTodos}
        onItemClick={this.handleItemClick}
      />
    );
  }
}
TodoItemListContainer.contextTypes = {
  store: React.PropTypes.object
};

export default TodoItemListContainer;
