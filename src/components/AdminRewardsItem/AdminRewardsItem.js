import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';

import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from '@material-ui/core';

function AdminRewardsItem(props) {
  const columnKeys = Object.keys(props.rowData);
  return (
    <TableRow>
      {columnKeys.map((column, index) => {
        const value = props.rowData[column];

        return (
          <TableCell key={index}>
            <p>{value}</p>
          </TableCell>
        );
      })}
    </TableRow>
  );
}

export default AdminRewardsItem;
