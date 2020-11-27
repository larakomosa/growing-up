import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* postSurvey(action) {
  console.log('made it to survey');
  console.log('payload', action.payload);
  try {
    yield put({ type: 'ERROR_RESET' });
    const response = yield axios.post(`/api/emotions`, action.payload);
    console.log(response.data);
    // version of a dispatch = put
    yield put({
      type: 'SET_SURVEY',
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

function* surveySaga() {
  yield takeLatest('POST_SURVEY', postSurvey);
}

export default surveySaga;
