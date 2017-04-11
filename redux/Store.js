import { applyMiddleware, compose, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import RootReducer from './reducers/IndexReducer';

let finalCreateStore = compose(
	applyMiddleware(thunk, createLogger())
)(createStore)

export default function configureStore(initialState = { todos: [], user: {} }) {
	return finalCreateStore(RootReducer, initialState);
}