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

function* getEmotions(action) {
  console.log('selected', action);
  try {
    console.log('selected', action);
    const selected = yield axios.get(`/api/emotions/${action.payload}`);
    yield put({
      type: 'SET_SURVEY',
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

function* surveySaga() {
  yield takeLatest('POST_SURVEY', postSurvey);
  yield takeLatest('GET_SURVEY', getEmotions);
}

export default surveySaga;
