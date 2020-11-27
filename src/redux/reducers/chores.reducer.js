const chores = (state = [], action) => {
  console.log('saga');
  switch (action.type) {
    case 'SET_CHORES':
      return action.payload;
    default:
      return state;
  }
};

export default chores;
