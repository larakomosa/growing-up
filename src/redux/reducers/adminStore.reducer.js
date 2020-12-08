const adminStore = (state = [], action) => {
  switch (action.type) {
    case 'SET_ADMIN_STORE':
      return action.payload;
    default:
      return state;
  }
};

export default adminStore;
