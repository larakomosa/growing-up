import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import ChoreItem from '../AdminChoreItem/AdminChoreItem.js';
import '../AdminChoreItem/ChoreItem.css';
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
  container: {
    maxHeight: 440,
  },
});

const columns = [
  {
    id: 'chore',
    label: 'Chore',
    minWidth: 170,
    align: 'right',
    colSpan: 3,
  },
  {
    id: 'category_id',
    label: 'category_id',
    minWidth: 170,
    align: 'right',
    colSpan: 1,
  },
  {
    id: 'coin_value',
    label: 'Coin_Value',
    minWidth: 170,
    align: 'right',
    colSpan: 1,
  },
  {
    colSpan: 1,
    id: 'description',
    label: 'Description',
    minWidth: 170,
    align: 'right',
  },
];

const AddChoreList = (props) => {
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
  if (props.store.chores) {
    htmlArray = props.store.chores.map((item, index) => {
      return <ChoreItem key={index} item={item} />;
    });
  }

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Chore</TableCell>
              <TableCell align="left">Category ID</TableCell>
              <TableCell align="left">Coin Value </TableCell>
              <TableCell align="left">Description</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{htmlArray}</TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        count={props.store.chores.length}
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
        type: 'GET_CHORES',
      }),
  };
};

export default connect(
  mapStoreToProps,
  mapDispatchToProps
)(withRouter(AddChoreList));