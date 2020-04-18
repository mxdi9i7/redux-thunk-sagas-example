import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import todoReducer from './todos';
import formReducer from './form';

export const TodoApp = combineReducers({
	todo: todoReducer,
	form: formReducer,
});

export const store = createStore(TodoApp, applyMiddleware(thunk));
