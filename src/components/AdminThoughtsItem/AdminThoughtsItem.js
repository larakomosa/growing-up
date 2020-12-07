import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import blueGrey from '@material-ui/core/colors/blueGrey';
function AdminThoughtsItem(props) {
  return (
    <>
      <TableRow>
        {' '}
        <TableCell align="left">
          <p>{props.item.date.substring(5, 10)}</p>
        </TableCell>
        <TableCell align="left">
          <p>{props.item.comment}</p>
        </TableCell>
        <TableCell align="left">
          <DeleteIcon
            style={{
              color: '#ff6e79',
            }}
          />
        </TableCell>
      </TableRow>
    </>
  );
}

export default AdminThoughtsItem;
