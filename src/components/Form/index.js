import React from 'react';
import {
	handleFormChange,
	handleFormSubmitAndAddTodo,
} from '../../redux/form/actions';
import { connect } from 'react-redux';

const component = ({ handleFormSubmit, handleFormChange, input }) => {
	return (
		<div>
			<input
				type='text'
				onChange={(e) => handleFormChange(e.target.value)}
				value={input}
			/>
			<button onClick={() => handleFormSubmit()}>Submit</button>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		input: state.form.input,
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		handleFormChange: (value) => dispatch(handleFormChange(value)),
		handleFormSubmit: () => dispatch(handleFormSubmitAndAddTodo()),
	};
};

const Form = connect(mapStateToProps, mapDispatchToProps)(component);

export default Form;
