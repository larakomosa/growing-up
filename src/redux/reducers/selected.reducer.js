const selected = (state = {}, action) => {
  switch (action.type) {
    case 'SET_SELECTED':
      return action.payload;
    default:
      return state;
  }
  console.log('log', action.payload);
};

export default selected;
