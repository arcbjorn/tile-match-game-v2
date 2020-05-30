import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import tileReducer from './reducers/tileReducer';

// combineReducers is used to fix the "undefined initial state" bug
const reducer = combineReducers({
  tileReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
