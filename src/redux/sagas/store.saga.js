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

function* storeSaga() {
  yield takeLatest('ASSIGN_STORE', assignStore);
  yield takeLatest('GET_ADMIN_STORE', getAdminStore);
}

export default storeSaga;
