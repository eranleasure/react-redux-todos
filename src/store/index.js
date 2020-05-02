import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './rootReducer';
import { loadState, saveState } from './localStorage';

const persistedState = loadState();

const store = createStore(rootReducer, persistedState, composeWithDevTools());

store.subscribe(() =>
  saveState({
    todos: store.getState().todos,
    filter: store.getState().filters,
    activeFilter: store.getState().activeFilter,
  }),
);

export default store;
