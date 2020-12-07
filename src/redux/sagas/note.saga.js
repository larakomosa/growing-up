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

function* deleteNote(action) {
  try {
    yield axios.put(`/api.emotions/notes/${action.payload}`);
    yield put({
      type: 'GET_NOTE',
    });
  } catch (err) {
    console.log('Error deleting plant:', err);
  }
}

function* postNote(action) {
  console.log('made it to reward survey');
  console.log('payload', action.payload);
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
      payload: 'There was a problem getting your movies!! Please try again.',
    });
  }
}

function* noteSaga() {
  yield takeLatest('GET_NOTE', getNote);
  yield takeLatest('DELETE_NOTE', deleteNote);
  yield takeLatest('POST_NOTE', postNote);
}

export default noteSaga;
