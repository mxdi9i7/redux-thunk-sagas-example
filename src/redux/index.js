import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import todoReducer from './todos';
import formReducer from './form';
import userReducer from './users';

import usersSaga from './users/sagas';

const sagaMiddleware = createSagaMiddleware();

export const TodoApp = combineReducers({
	todo: todoReducer,
	form: formReducer,
	users: userReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
	TodoApp,
	composeEnhancers(applyMiddleware(sagaMiddleware, thunk)),
);

sagaMiddleware.run(usersSaga);
