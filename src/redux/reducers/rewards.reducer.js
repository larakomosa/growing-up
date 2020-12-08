const rewards = (state = [], action) => {
  switch (action.type) {
    case 'SET_REWARDS':
      return action.payload;
    default:
      return state;
  }
};

export default rewards;
