const choreConf = (state = [], action) => {
  console.log('saga');
  switch (action.type) {
    case 'SET_CHORE_CONF':
      return action.payload;
    default:
      return state;
  }
};

export default choreConf;
