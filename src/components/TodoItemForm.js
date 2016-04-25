import React from 'react';

const TodoItemForm = props => {
  const { inputValue, onFormSubmit, onInputChange } = props;

  return (
    <form onSubmit={onFormSubmit}>
      <input onChange={onInputChange} value={inputValue} />
      <button type="submit">
        Add Todo
      </button>
    </form>
  );
};

export default TodoItemForm;
