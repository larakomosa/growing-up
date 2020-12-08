const adminRewards = (state = [], action) => {
  switch (action.type) {
    case 'SET_ADMIN_REWARDS':
      return action.payload;
    default:
      return state;
  }
};

export default adminRewards;
