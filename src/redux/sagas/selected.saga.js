import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getSelected(action) {
  console.log('selected action', action);
  try {
    console.log('selected action payload', action.payload);
    const selected = yield axios.get(`/api/store/selected/${action.payload}`);
    yield put({
      type: 'SET_SELECTED',
      payload: selected.data[0],
    });
    console.log('hi', selected.data[0]);
  } catch (err) {
    console.log(err);
    yield put({
      type: 'SET_ERROR',
      payload: 'Could not get Movie Details!!!',
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

function* selectedSaga() {
  yield takeLatest('GET_SELECTED', getSelected);
  yield takeLatest('UPDATE_SELECTED', updateSelected);
}

export default selectedSaga;
