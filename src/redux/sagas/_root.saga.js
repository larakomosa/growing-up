import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import noteSaga from './note.saga';
import assignedSaga from './assigned.saga';
import rewardsSaga from './rewards.saga';
import selectedSaga from './selected.saga';
import surveySaga from './survey.saga';
import choresSaga from './chores.saga';
import storeSaga from './store.saga';
import bankSaga from './bank.saga';

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(), // login saga is now registered
    registrationSaga(),
    userSaga(),
    noteSaga(),
    assignedSaga(),
    rewardsSaga(),
    selectedSaga(),
    surveySaga(),
    choresSaga(),
    storeSaga(),
    bankSaga(),
  ]);
}
