import axios from 'axios';

const fetchUsers = ({ page }) => {
	return axios.get('https://reqres.in/api/users', {
		params: {
			page,
		},
	});
};

const UsersService = {
	fetchUsers,
};

export default UsersService;
