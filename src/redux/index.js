import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {AuthReducer, NavReducer} from './reducers.js';

const RootReducer = combineReducers({
  ///
  AuthReducer,
  NavReducer,
});

export const store = createStore(RootReducer, applyMiddleware(thunk));
