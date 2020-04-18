import initialTodo from '../../constants/initialTodo';
import { ADD_TODO, COMPLETE_TODO, DELETE_TODO, FETCH_TODOS } from './action';

const todoReducer = (state = initialTodo, action) => {
	const { index } = action;
	const nextState = [...state];
	switch (action.type) {
		case ADD_TODO:
			return [...state, action.todo];
		case COMPLETE_TODO:
			nextState[index].isComplete = !nextState[index].isComplete;
			return nextState;
		case DELETE_TODO:
			nextState.splice(index, 1);
			return nextState;
		case FETCH_TODOS:
			return state;
		default:
			return state;
	}
};

export default todoReducer;
