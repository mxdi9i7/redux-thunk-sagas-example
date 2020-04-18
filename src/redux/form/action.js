import { addTodo } from '../todos/action';

export const HANDLE_FORM_CHANGE = 'HANDLE_FORM_CHANGE';
export const HANDLE_FORM_SUBMIT = 'HANDLE_FORM_SUBMIT';

export const handleFormChange = (input) => ({
	type: HANDLE_FORM_CHANGE,
	input,
});

export const handleFormSubmit = () => ({
	type: HANDLE_FORM_SUBMIT,
});

export const handleFormSubmitAndAddTodo = () => {
	return (dispatch, getState) => {
		const state = getState();
		const {
			form: { input },
		} = state;
		if (input) {
			dispatch(addTodo({ text: input, isComplete: false }));
			dispatch(handleFormSubmit());
		} else {
			alert('Input cannot be empty');
		}
	};
};
