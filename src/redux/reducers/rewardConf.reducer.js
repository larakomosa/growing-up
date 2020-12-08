const rewardConf = (state = [], action) => {
  switch (action.type) {
    case 'SET_REWARD_CONF':
      return action.payload;
    default:
      return state;
  }
};

export default rewardConf;
