import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import {
	USER_FETCH_SUCCEEDED,
	USER_FETCH_FAILED,
	USER_FETCH_REQUESTED,
} from './actions';
import UsersService from '../../services/users';

function* fetchUser(action) {
	const { payload } = action;
	try {
		const response = yield call(UsersService.fetchUsers, payload.page);
		yield put({
			type: USER_FETCH_SUCCEEDED,
			payload: { users: response.data.data, page: response.data.page },
		});
	} catch (error) {
		yield put({ type: USER_FETCH_FAILED, payload: { message: error.message } });
	}
}

function* usersSaga() {
	yield takeLatest(USER_FETCH_REQUESTED, fetchUser);
}

// function* usersSaga() {
// 	yield takeLatest(USER_FETCH_REQUESTED, fetchUser);
// }

export default usersSaga;
