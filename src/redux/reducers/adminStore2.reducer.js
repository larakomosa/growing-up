const adminStore2 = (state = [], action) => {
  console.log('saga');
  switch (action.type) {
    case 'SET_ADMIN_STORE2':
      return action.payload;
    default:
      return state;
  }
};

export default adminStore2;
