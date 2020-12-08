import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import UserItem from '../../components/UserItem/UserItem.js';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination';
import Divider from '@material-ui/core/Divider';
import blueGrey from '@material-ui/core/colors/blueGrey';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    marginTop: 20,
    maxHeight: 440,
  },
  head: {
    backgroundColor: blueGrey['700'],
  },
});

const UserList = (props) => {
  const classes = useStyles();

  let htmlArray = null;
  if (props.store.userList) {
    const htmlArray = props.store.fullList.map((item, index) => {
      return <UserItem key={index} item={item} />;
    });

    return (
      <Paper className={classes.root}>
        <TableContainer className={classes.container}>
          <Table
            stickyHeader="primary"
            aria-label="sticky table"
            size="small"
            color="primary"
          >
            <TableHead backgroundColor="blueGrey">
              <TableRow>
                <TableCell align="left">
                  <p>User ID</p>
                </TableCell>
                <TableCell align="left">
                  <p>Username</p>
                </TableCell>
                <TableCell align="left" colSpan={2}>
                  <p>Page_Role</p>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>{htmlArray}</TableBody>
          </Table>
        </TableContainer>
      </Paper>
    );
  }
};

const mapStoreToProps = (store) => ({
  store,
});

const mapDispatchToProps = (dispatch) => {
  return {
    componentDidMount: () =>
      dispatch({
        type: 'GET_FULL_LIST',
      }),
  };
};

export default connect(
  mapStoreToProps,
  mapDispatchToProps
)(withRouter(UserList));
