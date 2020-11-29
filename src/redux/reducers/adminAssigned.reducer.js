const adminAssigned = (state = [], action) => {
  console.log('saga');
  switch (action.type) {
    case 'SET_ADMIN_ASSIGNED':
      return action.payload;
    default:
      return state;
  }
};

export default adminAssigned;
