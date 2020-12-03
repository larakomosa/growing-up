import bankChores from './bankChores.reducer';
import bankRewards from './bankRewards.reducer';

const total = (state = '', action) => {
  if (action.type === 'BUTTON_INCREASE') {
    return (state = bankChores - bankRewards);

    console.log('state', state);
  }
  return state;
};

export default total;
