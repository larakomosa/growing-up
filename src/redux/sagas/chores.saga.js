import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getChores(action) {
  console.log('made it to chore saga');
  try {
    yield put({ type: 'ERROR_RESET' });
    const response = yield axios.get('/api/chores');
    console.log(response.data);
    // version of a dispatch = put
    yield put({
      type: 'SET_CHORES',
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

function* choresSaga() {
  yield takeLatest('GET_CHORES', getChores);
}

export default choresSaga;
