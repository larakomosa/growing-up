import React, { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import AdminStoreItem from '../AdminStoreItem/AdminStoreItem.js';
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

const useStyles = makeStyles({
  root: {
    width: '100%',
    padding: '8px 0 0',
  },
  container: {
    maxHeight: 900,
  },
});

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: blueGrey['700'],
    color: theme.palette.common.white,
    fontFamily: 'nunito',
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const AdminStoreList = (props) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'GET_ADMIN_STORE' });
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const filterRowsForDisplay = (originList, numOfRows, pgNum) => {
    if (originList.length === 0) {
      return [];
    }

    const posStart = numOfRows * pgNum;
    const posTo = posStart + numOfRows;

    return originList.slice(posStart, posTo);
  };

  const rowsDisplayed = filterRowsForDisplay(
    props.store.adminStore,
    rowsPerPage,
    page
  );

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table
          stickyHeader
          aria-label="sticky table"
          size="small"
          marginTop="5px"
        >
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">Reward</StyledTableCell>
              <StyledTableCell align="left">Value</StyledTableCell>
              <StyledTableCell align="left">Purchased</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rowsDisplayed.map((row, index) => {
              return <AdminStoreItem rowData={row} key={index} />;
            })}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        rowsPerPageOptions={[3, 5, 10]}
        component="div"
        count={props.store.adminStore.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(AdminStoreList);
