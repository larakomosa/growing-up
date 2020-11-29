import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getAdminStore(action) {
  console.log('selected', action);
  try {
    console.log('selected', action);
    const selected = yield axios.get(`/api/store/${action.payload}`);
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

function* storeSaga() {
  yield takeLatest('GET_ADMIN_STORE', getAdminStore);
}

export default storeSaga;
