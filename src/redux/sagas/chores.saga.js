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

function* getChoresTable(action) {
  console.log('made it to chore saga');
  try {
    yield put({ type: 'ERROR_RESET' });
    const response = yield axios.get('/api/chores/table');
    console.log(response.data);
    // version of a dispatch = put
    yield put({
      type: 'SET_CHORES_TABLE',
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

function* getChoreConf(action) {
  console.log('made it to chore saga');
  try {
    yield put({ type: 'ERROR_RESET' });
    const response = yield axios.get('/api/chores/conf');
    console.log(response.data);
    // version of a dispatch = put
    yield put({
      type: 'SET_CHORE_CONF',
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

function* getCategory(action) {
  console.log('made it to chore saga');
  try {
    yield put({ type: 'ERROR_RESET' });
    const response = yield axios.get('/api/chores/category');
    console.log(response.data);
    // version of a dispatch = put
    yield put({
      type: 'SET_CATEGORY',
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

function* postChore(action) {
  console.log('made it to survey');
  console.log('payload', action.payload);
  try {
    yield put({ type: 'ERROR_RESET' });
    const response = yield axios.post(`/api/chores`, action.payload);
    console.log(response.data);
    yield put({
      type: 'GET_CHORES',
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
  yield takeLatest('GET_CHORES_TABLE', getChoresTable);
  yield takeLatest('GET_CHORES', getChores);
  yield takeLatest('GET_CHORE_CONF', getChoreConf);
  yield takeLatest('GET_CATEGORY', getCategory);
  yield takeLatest('POST_CHORE', postChore);
}

export default choresSaga;
