import React from 'react';
import TodoItem from './TodoItem';

const TodoItemList = props => {
  const { todos, onItemClick } = props;
  let todoItemComponents = todos.map(todo => {
    const { id, text, completed } = todo;
    let onClick = () => { onItemClick(id) };
    return (
      <TodoItem key={id} text={text} completed={completed} onClick={onClick} />
    );
  });

  return (
    <ul>{todoItemComponents}</ul>
  );
};

export default TodoItemList;
