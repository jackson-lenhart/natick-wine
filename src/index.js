import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, compose, combineReducers } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import { REHYDRATE } from 'redux-persist/constants';
import thunk from 'redux-thunk';
import localForage from 'localforage';

import App from './components/app';

const menu = (state = {
  showMenu: false
}, action) => {
  switch (action.type) {
    case REHYDRATE:
      state = { showMenu: false };
      break;
    case 'TOGGLE_MENU':
      state = { showMenu: !state.showMenu };
      break;
    case 'REMOVE_MENU':
      state = { showMenu: false };
      break;
    default:
      state = { ...state }
      break;
  }
  return state;
};

const defaultState = {
  isActive: false,
  firstName: 'first name',
  lastName: 'last name',
  email: 'email'
};

const user = (state = defaultState, action) => {
  switch (action.type) {
    case REHYDRATE:
      state = action.payload.user || {};
      break;
    case 'CREATE_USER':
      state = {
        ...state,
        isActive: true,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        email: action.payload.email
      };
      break;
    case 'SET_USER':
      state = {
        ...state,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        email: action.payload.email
      };
      break;
    case 'DEACTIVATE':
      state = defaultState;
      break;
    default:
      state = {
        ...state
      };
      break;
  }
  return state;
};

const store = createStore(
  combineReducers({ menu, user }),
  {},
  compose(
    applyMiddleware(thunk),
    autoRehydrate()
  )
);

persistStore(store, { storage: localForage, whitelist: ['user'] });

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
