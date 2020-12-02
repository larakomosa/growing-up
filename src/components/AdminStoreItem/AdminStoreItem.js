import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

function AdminChoreItem(props) {
  return (
    <>
      <TableRow>
        <TableCell colSpan={1} align="left">
          <p>{props.item.reward}</p>
        </TableCell>
        <TableCell colSpan={1} align="left">
          <p> {props.item.coin_price}</p>
        </TableCell>
        <TableCell colSpan={1} align="left">
          <p> {props.item.selected.toString()}</p>
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
