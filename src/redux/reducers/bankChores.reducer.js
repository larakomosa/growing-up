const bankChores = (state = [], action) => {
  console.log('saga');
  switch (action.type) {
    case 'SET_BANK_CHORES':
      return action.payload;
    default:
      return state;
  }
};

export default bankChores;
