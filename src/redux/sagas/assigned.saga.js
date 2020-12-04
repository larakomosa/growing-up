import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getAssigned(action) {
  console.log('made it to assigned saga');
  try {
    yield put({ type: 'ERROR_RESET' });
    const response = yield axios.get(`/api/assigned/child`);
    console.log(response.data);
    // version of a dispatch = put
    yield put({
      type: 'SET_ASSIGNED',
      payload: response.data,
    });
  } catch (err) {
    console.log('GET all movies error', err);
    yield put({
      type: 'ERROR_MSG',
      payload: 'There was a problem getting your movies!! Please try again.',
    });
  }
}

function* getAdminAssigned(action) {
  console.log('assigned saga payload', action.payload);
  console.log(action.payload);
  try {
    yield put({ type: 'ERROR_RESET' });
    const response = yield axios.get(`/api/assigned/admin/${action.payload}`);
    console.log('response', response.data);
    // version of a dispatch = put
    yield put({
      type: 'SET_ADMIN_ASSIGNED',
      payload: response.data,
    });
  } catch (err) {
    console.log('GET all movies error', err);
    yield put({
      type: 'ERROR_MSG',
      payload: 'There was a problem getting your movies!! Please try again.',
    });
  }
}

function* assignChore(action) {
  console.log('made it to reward survey');
  console.log('payload', action.payload);
  try {
    yield put({ type: 'ERROR_RESET' });
    const response = yield axios.post(`/api/assigned`, action.payload);
    console.log(response.data);
    yield put({
      type: 'GET_ASSIGNED',
    });
  } catch (err) {
    console.log('GET all movies error', err);
    yield put({
      type: 'ERROR_MSG',
      payload: 'There was a problem getting your movies!! Please try again.',
    });
  }
}

function* updateAssigned(action) {
  try {
    yield axios.put(`/api/assigned/${action.payload}`);
    yield put({
      type: 'GET_ASSIGNED',
    });
  } catch (err) {
    console.log('Error deleting plant:', err);
  }
}

function* assignedSaga() {
  yield takeLatest('GET_ASSIGNED', getAssigned);
  yield takeLatest('ASSIGN_CHORE', assignChore);
  yield takeLatest('GET_ADMIN_ASSIGNED', getAdminAssigned);
  yield takeLatest('UPDATE_ASSIGNED', updateAssigned);
}

export default assignedSaga;
