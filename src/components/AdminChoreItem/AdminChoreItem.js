import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

function AdminChoreItem(props) {
  return (
    <TableRow>
      <TableCell colSpan={1} align="left">
        <h5>{props.item.chore}</h5>
      </TableCell>
      <TableCell colSpan={1} align="left">
        <h5>{props.item.coin_value}</h5>
      </TableCell>
      <TableCell colSpan={1} align="left">
        <h5>{props.item.description}</h5>
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
