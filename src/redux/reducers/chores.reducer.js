const chores = (state = [], action) => {
  switch (action.type) {
    case 'SET_CHORES':
      return action.payload;
    default:
      return state;
  }
};

export default chores;
