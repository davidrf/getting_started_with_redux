import counter from '../reducers/counter';

const createStore = reducer => {
  let state;
  let listeners = [];

  const getState = () => state;

  const dispatch = action => {
    state = reducer(state, action);
    listeners.forEach(listener => listener());
  };

  const subscribe = listenerToSubscribe => {
    listeners.push(listenerToSubscribe);
    return () => {
      listeners = listeners.filter(listener => listener !== listenerToSubscribe)
    };
  };

  dispatch({});

  return { getState, dispatch, subscribe };
};

const store = createStore(counter);

export default store;
