const choresTable = (state = [], action) => {
  console.log('saga');
  switch (action.type) {
    case 'SET_CHORES_TABLE':
      return action.payload;
    default:
      return state;
  }
};

export default choresTable;
