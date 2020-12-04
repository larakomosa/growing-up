import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import AdminAssignedItem from '../../components/AdminAssignedItem/AdminAssignedItem.js';
import PersonSelect from '../../components/AdminStoreList/PersonSelect';
// import '../AdminChoreItem/ChoreItem.css';
import { withStyles, createStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  table: { minWidth: 650 },
  container: {
    maxHeight: 440,
  },
});

const AdminAssignedList = (props) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const classes = useStyles();

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  let htmlArray = null;
  if (props.store.adminRewards) {
    htmlArray = props.store.adminAssigned.map((item, index) => {
      return <AdminAssignedItem key={index} item={item} />;
    });
  }

  return (
    <Paper className={classes.root}>
      <PersonSelect />
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table" size="small">
          <TableHead>
            <TableRow>
              <TableCell colSpan={7} align="left">
                Chore
              </TableCell>
              <TableCell colSpan={2} align="left">
                Value{' '}
              </TableCell>
              <TableCell colSpan={3} align="left">
                Completed
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{htmlArray}</TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        count={props.store.adminAssigned.length}
        rowsPerPage={rowsPerPage}
        page={page}
        component="div"
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

const mapStoreToProps = (store) => ({
  store,
});

const mapDispatchToProps = (dispatch) => {
  return {
    componentDidMount: () =>
      dispatch({
        type: 'GET_USERS',
      }),
  };
};

export default connect(
  mapStoreToProps,
  mapDispatchToProps
)(withRouter(AdminAssignedList));
