const bankRewards = (state = [], action) => {
  console.log('saga');
  switch (action.type) {
    case 'SET_BANK_REWARDS':
      return action.payload;
    default:
      return state;
  }
};

export default bankRewards;
