/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducer from './movies/reducer';

const rootReducer = combineReducers({ reducer });
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);
export default store;
