const assigned = (state = [], action) => {
  console.log('saga')
  switch (action.type) {
    case 'SET_ASSIGNED':
      return action.payload; 
    default:
      return state;
  }
};

export default assigned;