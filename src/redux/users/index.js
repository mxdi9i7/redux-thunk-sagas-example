import {
	USER_FETCH_REQUESTED,
	USER_FETCH_SUCCEEDED,
	USER_FETCH_FAILED,
} from './actions';

const initialState = {
	users: [],
	loading: false,
	error: '',
	page: 1,
};

const userReducer = (state = initialState, action) => {
	const nextState = { ...state };
	const { payload } = action;
	switch (action.type) {
		case USER_FETCH_REQUESTED:
			nextState.loading = true;
			return nextState;
		case USER_FETCH_SUCCEEDED:
			nextState.users = payload.users;
			nextState.page = payload.page;
			nextState.loading = false;
			return nextState;
		case USER_FETCH_FAILED:
			nextState.loading = false;
			nextState.error = payload.error;
			return nextState;
		default:
			return state;
	}
};

export default userReducer;
