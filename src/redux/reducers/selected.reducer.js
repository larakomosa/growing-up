const selected = (state = [], action) => {
  console.log('saga')
  switch (action.type) {
    case 'SET_SELECTED':
      return action.payload; 
    default:
      return state;
  }
};

export default selected;