import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getAdminStore1(action) {
  console.log('selected', action);
  try {
    console.log('selected', action);
    const selected = yield axios.get(`/api/store/a`);
    yield put({
      type: 'SET_ADMIN_STORE1',
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

function* getAdminStore2(action) {
  console.log('selected', action);
  try {
    console.log('selected', action);
    const selected = yield axios.get(`/api/store/b`);
    yield put({
      type: 'SET_ADMIN_STORE2',
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

function* storeSaga() {
  yield takeLatest('GET_ADMIN_STORE1', getAdminStore1);
  yield takeLatest('GET_ADMIN_STORE2', getAdminStore2);
}

export default storeSaga;
