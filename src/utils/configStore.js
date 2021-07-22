import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import {rootReducer} from 'reducers';

export default function configureStore() {
  const composeArgs = [
    applyMiddleware(thunk),
  ];
  if(window && window.__REDUX_DEVTOOLS_EXTENSION__) {
    composeArgs.push(window.__REDUX_DEVTOOLS_EXTENSION__());
  }

  const store = createStore(
    rootReducer,
    compose.apply(undefined, composeArgs)
  );

  return store;
}
