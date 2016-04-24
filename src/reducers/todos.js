import todo from './todo';

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      let newTodo = todo(undefined, action);
      return [
        ...state,
        newTodo
      ];
    case 'TOGGLE_TODO':
      return state.map(stateTodo => todo(stateTodo, action));
    default:
      return state;
  }
};

export default todos;
