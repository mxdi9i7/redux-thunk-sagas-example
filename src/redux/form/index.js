import { HANDLE_FORM_CHANGE, HANDLE_FORM_SUBMIT } from './action';

const initialState = {
	input: '',
};

const formReducer = (state = initialState, action) => {
	console.log(action);
	switch (action.type) {
		case HANDLE_FORM_CHANGE:
			return {
				...state,
				input: action.input,
			};

		case HANDLE_FORM_SUBMIT:
			console.log('called');
			return {
				...state,
				input: '',
			};

		default:
			return state;
	}
};

export default formReducer;
