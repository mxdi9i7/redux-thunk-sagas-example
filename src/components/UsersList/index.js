import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { userFetchRequested } from '../../redux/users/actions';

const Component = ({ usersList, fetchUsers, loading }) => {
	useEffect(() => {
		fetchUsers();
	}, [fetchUsers]);
	return (
		<div>
			{loading && 'Loading data'}
			{usersList &&
				usersList.map((user) => (
					<div>
						<p>{user.first_name}</p>
						<p>{user.last_name}</p>
						<p>{user.email}</p>
						<img src={user.avatar} alt='avatar' />
					</div>
				))}
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		usersList: state.users.users,
		loading: state.users.loading,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchUsers: () => dispatch(userFetchRequested({ page: 1 })),
	};
};

const UsersList = connect(mapStateToProps, mapDispatchToProps)(Component);

export default UsersList;
