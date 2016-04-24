import todoApp from '../reducers/todoApp';
import { createStore } from 'redux';

const store = createStore(todoApp);

export default store;
