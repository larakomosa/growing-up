import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* getAssigned (action) {
      console.log ('made it to saga')
  try {
    yield put({ type: 'ERROR_RESET' });
    const response = yield axios.get(`/api/assigned/child`)
    console.log(response.data);
    // version of a dispatch = put
    yield put({
      type: 'SET_ASSIGNED',
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

function* updateAssigned(action) {
  try {
    yield axios.put(`/api/assigned/${action.payload}`);
    yield put({
      type: 'SET_ASSIGNED',
    });
  } catch (err) {
    console.log('Error deleting plant:', err);
  }
}


function* assignedSaga() {
  yield takeLatest('GET_ASSIGNED', getAssigned);
  yield takeLatest('UPDATE_ASSIGNED', updateAssigned);
}

export default assignedSaga;