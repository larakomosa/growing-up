const survey = (
  //reducer adjust data based on dispatch key
  state = { feelings: 0, sleep: 0, anxiety: 0, comment: '' },
  action
) => {
  if (action.type === 'ADD_FEELING') {
    //feeling page
    return {
      ...state,
      feelings: action.payload,
    };
  } else if (action.type === 'ADD_SLEEP') {
    //understanding page
    return {
      ...state,
      sleep: action.payload,
    };
  } else if (action.type === 'ADD_ANXIETY') {
    //support page
    return {
      ...state,
      anxiety: action.payload,
    };
  } else if (action.type === 'ADD_THOUGHTS') {
    //comments page
    return {
      ...state,
      comment: action.payload,
    };
  } else if (action.type === 'START_OVER') {
    //when submit button is clicked, object is returned to initial state
    return { feelings: 0, understanding: 0, support: 0, comment: '' };
  }
  return state;
};

export default survey;
