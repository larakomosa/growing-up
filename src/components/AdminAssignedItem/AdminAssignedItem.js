import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

function AdminChoreItem(props) {
  return (
    <TableRow>
      <TableCell colSpan={7} align="left">
        <h5>{props.item.chore}</h5>
      </TableCell>
      <TableCell colSpan={2} align="left">
        <h5>{props.item.coin_value}</h5>
      </TableCell>
      <TableCell colSpan={3} align="left">
        <h5>{props.item.completion_status.toString()}</h5>
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
