import { createStore, applyMyddleware, compose } from 'redux';
import reducer from './reducer';
import thunkMiddleware from 'redux-thunk';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMyddleware(thunkMiddleware)));

export default store;
