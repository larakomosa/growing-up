import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getAdminStore(action) {
  console.log('selected', action);
  try {
    console.log('selected', action);
    const selected = yield axios.get(`/api/store/admin/${action.payload}`);
    yield put({
      type: 'SET_ADMIN_STORE',
      payload: selected.data,
    });
  } catch (err) {
    console.log(err);
    yield put({
      type: 'SET_ERROR',
      payload: 'Could not get Movie Details!!!',
    });
  }
}

function* assignStore(action) {
  console.log('made it to reward survey');
  console.log('payload', action.payload);
  try {
    yield put({ type: 'ERROR_RESET' });
    const response = yield axios.post(`/api/store`, action.payload);
    console.log(response.data);
    // yield put({
    //   type: 'SET_ADMIN_REWARDS',
    //   payload: response.data,
    // });
  } catch (err) {
    console.log('GET all movies error', err);
    yield put({
      type: 'ERROR_MSG',
      payload: 'There was a problem getting your movies!! Please try again.',
    });
  }
}

function* updateSelected(action) {
  try {
    yield axios.put(`/api/store/${action.payload}`);
    yield put({
      type: 'GET_SELECTED',
    });
  } catch (err) {
    console.log('Error deleting plant:', err);
  }
}

function* storeSaga() {
  yield takeLatest('ASSIGN_STORE', assignStore);
  yield takeLatest('GET_ADMIN_STORE', getAdminStore);
  yield takeLatest('UPDATE_SELECTED', updateSelected);
}

export default storeSaga;
