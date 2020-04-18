export const USER_FETCH_REQUESTED = 'USER_FETCH_REQUESTED';
export const USER_FETCH_SUCCEEDED = 'USER_FETCH_SUCCEEDED';
export const USER_FETCH_FAILED = 'USER_FETCH_FAILED';

export const userFetchRequested = ({ payload }) => {
	return {
		type: USER_FETCH_REQUESTED,
		payload: {
			page: 1,
		},
	};
};
export const userFetchSucceeded = () => {
	return {
		type: USER_FETCH_SUCCEEDED,
	};
};
export const userFetchFailed = () => {
	return {
		type: USER_FETCH_FAILED,
	};
};
