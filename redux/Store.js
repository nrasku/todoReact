import { applyMiddleware, compose, createStore } from 'redux';
import { createLogger } from 'redux-logger';

import Reducer from './Reducer';

let finalCreateStore = compose(
	applyMiddleware(createLogger())
)(createStore)

export default function configureStore(initialState = { todos: [] }) {
	return finalCreateStore(Reducer, initialState);
}