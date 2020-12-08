const choreConf = (state = [], action) => {
  switch (action.type) {
    case 'SET_CHORE_CONF':
      return action.payload;
    default:
      return state;
  }
};

export default choreConf;
