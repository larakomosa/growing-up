const adminAssigned = (state = [], action) => {
  switch (action.type) {
    case 'SET_ADMIN_ASSIGNED':
      return action.payload;
    default:
      return state;
  }
};

export default adminAssigned;
