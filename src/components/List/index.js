import React from 'react';
import Todo from '../Todo';
import { connect } from 'react-redux';
import { deleteTodo, completeTodo } from '../../redux/todos/actions';

const Component = ({ dispatch, todos, handleDelete, handleCompleteCheck }) => {
	console.log(dispatch);
	return (
		<div>
			{todos.map((todo, i) => (
				<Todo
					key={i}
					handleDelete={() => handleDelete(i)}
					handleCompleteCheck={handleCompleteCheck}
					value={todo.text}
					isComplete={todo.isComplete}
					index={i}
				/>
			))}
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		todos: state.todo,
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		handleDelete: (i) => dispatch(deleteTodo(i)),
		handleCompleteCheck: (i) => dispatch(completeTodo(i)),
	};
};

const List = connect(mapStateToProps, mapDispatchToProps)(Component);

export default List;
