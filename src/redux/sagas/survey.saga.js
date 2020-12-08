import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* postSurvey(action) {
  try {
    yield put({ type: 'ERROR_RESET' });
    const response = yield axios.post(`/api/emotions`, action.payload);
    yield put({
      type: 'SET_SURVEY',
      payload: response.data,
    });
  } catch (err) {
    console.log(err);
    yield put({
      type: 'ERROR_MSG',
      payload: 'There was a problem posting your Suvey.',
    });
  }
}

function* getEmotions(action) {
  try {
    const selected = yield axios.get(`/api/emotions/${action.payload}`);
    yield put({
      type: 'SET_SURVEY',
      payload: selected.data,
    });
  } catch (err) {
    console.log(err);
    yield put({
      type: 'SET_ERROR',
      payload: 'Could not get Emotions Survey',
    });
  }
}

function* deleteSurveyItem(action) {
  try {
    const selected = yield axios.delete(`/api/emotions/${action.payload}`);
  } catch (err) {
    console.log('Error deleting survey:', err);
  }
}

function* surveySaga() {
  yield takeLatest('POST_SURVEY', postSurvey);
  yield takeLatest('GET_SURVEY', getEmotions);
  yield takeLatest('DELETE_SURVEY_ITEM', deleteSurveyItem);
}

export default surveySaga;
