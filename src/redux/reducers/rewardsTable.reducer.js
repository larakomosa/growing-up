const rewardTable = (state = [], action) => {
  console.log('saga');
  switch (action.type) {
    case 'SET_REWARD_TABLE':
      return action.payload;
    default:
      return state;
  }
};

export default rewardTable;
