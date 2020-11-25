const rewards  = (state = [], action) => {
  console.log('saga')
  switch (action.type) {
    case 'SET_REWARDS':
      return action.payload; 
    default:
      return state;
  }
};

export default rewards;