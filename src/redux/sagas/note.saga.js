import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getNote(action) {
  try {
    yield put({ type: 'ERROR_RESET' });
    const response = yield axios.get(`/api/emotions/child/notes`); //get route path
    console.log('saga', action);
    // version of a dispatch = put
    yield put({
      type: 'SET_NOTE',
      payload: response.data[0],
    });
  } catch (err) {
    console.log('GET all movies error', err);
    yield put({
      type: 'ERROR_MSG',
      payload: 'There was a problem getting your movies!! Please try again.',
    });
  }
}

function* noteSaga() {
  yield takeLatest('GET_NOTE', getNote);
}

export default noteSaga;
