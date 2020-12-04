const childUsers = (state = [], action) => {
  console.log('saga');
  switch (action.type) {
    case 'SET_CHILD_USERS':
      return action.payload;
    default:
      return state;
  }
};

export default childUsers;
