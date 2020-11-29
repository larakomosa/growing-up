const adminRewards = (state = [], action) => {
  console.log('saga');
  switch (action.type) {
    case 'SET_ADMIN_REWARDS':
      return action.payload;
    default:
      return state;
  }
};

export default adminRewards;
