import React, { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';

import { makeStyles, withStyles } from '@material-ui/core/styles';
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
import blueGrey from '@material-ui/core/colors/blueGrey';

import AdminAssignedItem from '../AdminAssignedItem/AdminAssignedItem';

const useStyles = makeStyles({
  root: {
    width: '100%',
    padding: '8px 0 0',
  },
  container: {
    maxHeight: 290,
  },
});

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: blueGrey['700'],
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

function AdminAssignedList(props) {
  // hooks for react-redux
  const dispatch = useDispatch();
  // hooks for material-ui styling
  const classes = useStyles();
  // hooks for local state
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  // hooks componentDidMount equivalent
  useEffect(() => {
    dispatch({ type: 'GET_ADMIN_ASSIGNED' });
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  // set up function to limit rows from full set of data
  const filterRowsForDisplay = (originList, numOfRows, pgNum) => {
    if (originList.length === 0) {
      return [];
    }

    const posStart = numOfRows * pgNum;
    const posTo = posStart + numOfRows;

    return originList.slice(posStart, posTo);
  };
  // make rows for display in table
  const rowsDisplayed = filterRowsForDisplay(
    props.store.adminAssigned,
    rowsPerPage,
    page
  );

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table" size="small">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">Chore</StyledTableCell>
              <StyledTableCell align="left">Value</StyledTableCell>
              <StyledTableCell align="left">Complete</StyledTableCell>
              <StyledTableCell align="left">Complete</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rowsDisplayed.map((row, index) => {
              return <AdminAssignedItem rowData={row} key={index} />;
            })}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        rowsPerPageOptions={[3, 5, 10]}
        component="div"
        count={props.store.adminAssigned.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(AdminAssignedList);
