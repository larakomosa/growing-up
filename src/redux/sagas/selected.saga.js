import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getSelected(action) {
  console.log('selected action', action);
  try {
    console.log('selected action payload', action.payload);
    const selected = yield axios.get(
      `/api/store/details/testing/${action.payload}`
    );
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

function* selectedSaga() {
  yield takeLatest('GET_SELECTED', getSelected);
}

export default selectedSaga;
