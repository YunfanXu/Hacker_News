import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
  createStore,
  applyMiddleware
} from 'redux'
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import thunkMiddleware from 'redux-thunk'
import defaultState from './state/defaultState.json'
import reducers from './state/reducers'

const store = createStore(
  reducers,
  defaultState,
  applyMiddleware(thunkMiddleware),
)

store.subscribe(function() {
  // console.log("=====store:",store.getState());
})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
