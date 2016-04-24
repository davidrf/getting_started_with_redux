import counter from '../reducers/counter';
import { createStore } from 'redux';

const store = createStore(counter);

export default store;
