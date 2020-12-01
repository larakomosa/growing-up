import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

function AdminChoreItem(props) {
  return (
    <>
      <TableRow>
        <TableCell colSpan={1} align="left">
          {props.item.reward}
        </TableCell>
        <TableCell colSpan={1} align="left">
          {props.item.coin_price}
        </TableCell>
        <TableCell colSpan={1} align="left">
          <h5>{props.item.selected.toString()}</h5>
        </TableCell>
        {/* <td>
        <button onClick={props.onClick(props.item.id)}>
          <DeleteIcon />
        </button>
      </td> */}
      </TableRow>
    </>
  );
}

export default AdminChoreItem;