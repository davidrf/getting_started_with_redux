import React from 'react';

const TodoItem = props => {
  const { completed, onClick, text } = props;
  let className;

  if (completed) {
    className = 'completed';
  }

  return (
    <li onClick={onClick} className={className}>
      {text}
    </li>
  );
};

export default TodoItem;
