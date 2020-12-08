import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getNote(action) {
  try {
    yield put({ type: 'ERROR_RESET' });
    const response = yield axios.get(`/api/emotions/child/notes`);
    console.log('saga', action);
    yield put({
      type: 'SET_NOTE',
      payload: response.data[0],
    });
  } catch (err) {
    console.log(err);
    yield put({
      type: 'ERROR_MSG',
      payload: 'There was an error getting your note.',
    });
  }
}

function* postNote(action) {
  try {
    yield put({ type: 'ERROR_RESET' });
    const response = yield axios.post(
      `/api/emotions/child/notes`,
      action.payload
    );
    console.log(response.data);
    // yield put({
    //   type: 'SET_ADMIN_REWARDS',
    //   payload: response.data,
    // });
  } catch (err) {
    console.log('GET all movies error', err);
    yield put({
      type: 'ERROR_MSG',
      payload: 'There was a problem getting your note',
    });
  }
}

function* noteSaga() {
  yield takeLatest('GET_NOTE', getNote);
  yield takeLatest('POST_NOTE', postNote);
}

export default noteSaga;
