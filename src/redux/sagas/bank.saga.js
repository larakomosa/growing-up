import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getBankRewards(action) {
  console.log('bankRewards saga;');
  try {
    console.log('selected action payload', action.payload);
    const selected = yield axios.get(`/api/bank/rewards`);
    yield put({
      type: 'SET_BANK_REWARDS',
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

function* getBankChores(action) {
  console.log('bankChores saga');
  try {
    console.log('selected action payload', action.payload);
    const selected = yield axios.get(`/api/bank/chores`);
    yield put({
      type: 'SET_BANK_CHORES',
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

function* bankSaga() {
  yield takeLatest('GET_BANK_REWARDS', getBankRewards);
  yield takeLatest('GET_BANK_CHORES', getBankChores);
}

export default bankSaga;
