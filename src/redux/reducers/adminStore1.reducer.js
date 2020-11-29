const adminStore1 = (state = [], action) => {
  console.log('saga');
  switch (action.type) {
    case 'SET_ADMIN_STORE1':
      return action.payload;
    default:
      return state;
  }
};

export default adminStore1;
