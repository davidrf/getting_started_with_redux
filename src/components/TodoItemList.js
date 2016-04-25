import React from 'react';
import TodoItem from './TodoItem';

const TodoItemList = props => {
  const { todos } = props;
  let todoItemComponents = todos.map(todo => {
    const { id, text } = todo;
    return <TodoItem key={id} text={text} />;
  });

  return (
    <ul>{todoItemComponents}</ul>
  );
};

export default TodoItemList;
