import { HANDLE_FORM_CHANGE, HANDLE_FORM_SUBMIT } from './actions';

const initialState = {
	input: '',
};

const formReducer = (state = initialState, action) => {
	switch (action.type) {
		case HANDLE_FORM_CHANGE:
			return {
				...state,
				input: action.input,
			};

		case HANDLE_FORM_SUBMIT:
			return {
				...state,
				input: '',
			};

		default:
			return state;
	}
};

export default formReducer;
