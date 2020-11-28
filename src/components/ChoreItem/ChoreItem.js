import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';

function ChoreItem(props) {
  return (
    <tr>
      <td>
        <h5>{props.item.chore}</h5>
      </td>
      <td>
        <h5>{props.item.category_id}</h5>
      </td>
      <td>
        <h5>{props.item.coin_value}</h5>
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

export default ChoreItem;
