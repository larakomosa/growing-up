import React, { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import AdminChoreItem from '../AdminChoreItem/AdminChoreItem.js';
// import '../AdminChoreItem/ChoreItem.css';
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
    maxHeight: 530,
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

const AdminChoreList = (props) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'GET_CHORES_TABLE' });
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
    props.store.choreTable,
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
              <StyledTableCell align="left">Description</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rowsDisplayed.map((row, index) => {
              return <AdminChoreItem rowData={row} key={index} />;
            })}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        rowsPerPageOptions={[3, 5, 15]}
        component="div"
        count={props.store.choreTable.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(AdminChoreList);
