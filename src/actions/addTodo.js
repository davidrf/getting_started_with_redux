const addTodo = text => {
  return {
    type: 'ADD_TODO',
    text,
    id: Date.now()
  };
};

export default addTodo;
