import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

function AdminRewardsItem(props) {
  console.log(props.item.selected);
  console.log(props.item.reward);
  return (
    <TableRow size="small">
      <TableCell colSpan={1} align="left">
        <p>{props.item.reward}</p>
      </TableCell>
      <TableCell colSpan={1} align="left">
        <p>${props.item.coin_price}</p>
      </TableCell>
      <td>
        <TableCell colSpan={1} align="left">
          <DeleteIcon fontSize="small" />
        </TableCell>
      </td>
    </TableRow>
  );
}

export default AdminRewardsItem;
