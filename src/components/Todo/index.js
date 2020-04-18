import React from 'react';

export default function Todo({
	handleCompleteCheck,
	handleDelete,
	value,
	isComplete,
	index,
}) {
	return (
		<div>
			<input
				type='checkbox'
				onChange={() => handleCompleteCheck(index)}
				checked={isComplete}
			/>
			{!isComplete ? <span>{value}</span> : <strike>{value}</strike>}

			<button onClick={() => handleDelete(index)}>x</button>
		</div>
	);
}
