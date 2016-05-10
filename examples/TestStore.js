import {createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import TestReducer from ../reducers/TestReducer

export default function configureStore() {
  const store = compose(
    applyMiddleware(thunkMiddleware)
  )(createStore)(TestReducer);

  return store;
}
