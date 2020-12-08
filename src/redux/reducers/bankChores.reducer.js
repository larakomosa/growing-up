const bankChores = (state = [], action) => {
  switch (action.type) {
    case 'SET_BANK_CHORES':
      return action.payload;
    default:
      return state;
  }
};

export default bankChores;
