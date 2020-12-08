const rewardTable = (state = [], action) => {
  switch (action.type) {
    case 'SET_REWARD_TABLE':
      return action.payload;
    default:
      return state;
  }
};

export default rewardTable;
