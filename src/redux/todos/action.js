export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const FETCH_TODOS = 'FETCH_TODOS';

export const addTodo = (todo) => {
	return { type: ADD_TODO, todo };
};

export const completeTodo = (index) => ({
	type: COMPLETE_TODO,
	index,
});

export const deleteTodo = (index) => ({ type: DELETE_TODO, index });

export const fetchTodos = () => ({
	type: FETCH_TODOS,
});
