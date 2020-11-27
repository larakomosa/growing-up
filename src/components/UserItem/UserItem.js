import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';

function UserItem(props) {
  return (
    <tr>
      <td>
        <h5>{props.item.id}</h5>
      </td>
      <td>
        <h5>{props.item.username}</h5>
      </td>
      <td>
        <h5>{props.item.page_role}</h5>
      </td>
      {/* <td>
        <button onClick={props.onClick(props.item.id)}>
          <DeleteIcon />
        </button>
      </td> */}
    </tr>
  );
}

export default UserItem;
