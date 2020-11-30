import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import roles from './roles.reducer';
import note from './note.reducer';
import assigned from './assigned.reducer';
import rewards from './rewards.reducer';
import selected from './selected.reducer';
import survey from './survey.reducer';
import chores from './chores.reducer';
import category from './category.reducer';
import userList from './user.list.reducer';
import adminRewards from './adminRewards.reducer';
import adminStore from './adminStore.reducer';
import adminAssigned from './adminAssigned.reducer';
import adminEmotions from './adminEmotions.reducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  roles,
  note,
  assigned,
  rewards,
  selected,
  survey,
  chores,
  category,
  userList,
  adminRewards,
  adminStore,
  adminAssigned,
  adminEmotions,
});

export default rootReducer;
