const choresTable = (state = [], action) => {
  switch (action.type) {
    case 'SET_CHORES_TABLE':
      return action.payload;
    default:
      return state;
  }
};

export default choresTable;
