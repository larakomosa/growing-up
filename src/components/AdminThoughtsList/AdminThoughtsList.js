import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import AdminThoughtsItem from '../AdminThoughtsItem/AdminThoughtsItem.js';
// import '../AdminChoreItem/ChoreItem.css';
import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import blueGrey from '@material-ui/core/colors/blueGrey';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 300,
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
    fontFamily: 'nunito',
  },
  cells: {
    fontFamily: 'nunito',
  },
}))(TableCell);

const AdminThoughts = (props) => {
  const classes = useStyles();

  let htmlArray = null;
  if (props.store.adminRewards) {
    htmlArray = props.store.adminEmotions.map((item, index) => {
      return <AdminThoughtsItem key={index} item={item} />;
    });
  }

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table
          stickyHeader
          aria-label="sticky table"
          size="small"
          fontFamily="nunito"
        >
          <TableHead className={classes.head}>
            <TableRow>
              <StyledTableCell align="left">Date</StyledTableCell>
              <StyledTableCell align="left">Thoughts</StyledTableCell>
              <StyledTableCell align="left">
                {' '}
                <DeleteIcon />
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody className={classes.cells}>{htmlArray}</TableBody>
        </Table>
      </TableContainer>
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
        type: 'GET_SURVEY',
      }),
  };
};

export default connect(
  mapStoreToProps,
  mapDispatchToProps
)(withRouter(AdminThoughts));
