const adminEmotions = (state = [], action) => {
  console.log('saga');
  switch (action.type) {
    case 'SET_SURVEY':
      return action.payload;
    default:
      return state;
  }
};

export default adminEmotions;
