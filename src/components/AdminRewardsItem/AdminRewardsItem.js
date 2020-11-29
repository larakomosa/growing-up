import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';

function AdminRewardsItem(props) {
  console.log(props.item.selected);
  console.log(props.item.reward);
  return (
    <tr>
      <td>
        <h5>{props.item.reward}</h5>
      </td>
      <td>
        <h5>{props.item.coin_price}</h5>
      </td>
      <td>
        <h5>{props.item.description}</h5>
      </td>
      {/* <td>
        <button onClick={props.onClick(props.item.id)}>
          <DeleteIcon />
        </button>
      </td> */}
    </tr>
  );
}

export default AdminRewardsItem;
