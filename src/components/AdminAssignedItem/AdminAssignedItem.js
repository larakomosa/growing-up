import React from 'react';

import { TableCell, TableRow } from '@material-ui/core';

function AdminAssignedItem(props) {
  const columnKeys = Object.keys(props.rowData);

  return (
    <TableRow>
      {columnKeys.map((column, index) => {
        const value = props.rowData[column];

        return (
          <TableCell key={index}>
            <p>{value.toString()}</p>
          </TableCell>
        );
      })}
    </TableRow>
  );
}

export default AdminAssignedItem;
