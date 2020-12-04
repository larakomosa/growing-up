import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

function AdminThoughtsItem(props) {
  return (
    <>
      <TableRow>
        {' '}
        <TableCell colSpan={1} align="left">
          {props.item.date.substring(5, 10)}
        </TableCell>
        <TableCell colSpan={1} align="left">
          {props.item.comment}
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

export default AdminThoughtsItem;
