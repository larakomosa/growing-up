import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

function AdminChoreItem(props) {
  return (
    <TableRow>
      <TableCell colSpan={7} align="left">
        <p>{props.item.chore}</p>
      </TableCell>
      <TableCell colSpan={2} align="left">
        <p>{props.item.coin_value}</p>
      </TableCell>
      <TableCell colSpan={3} align="left">
        <p>{props.item.completion_status.toString()}</p>
      </TableCell>
      {/* <td>
        <button onClick={props.onClick(props.item.id)}>
          <DeleteIcon />
        </button>
      </td> */}
    </TableRow>
  );
}

export default AdminChoreItem;
