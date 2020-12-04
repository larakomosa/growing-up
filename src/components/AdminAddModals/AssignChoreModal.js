import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button } from '@material-ui/core';
import AssignChoreForm from '../Forms/AssignChoreForm.js';
import '../Forms/Form.css';
import blueGrey from '@material-ui/core/colors/blueGrey';
import swal from 'sweetalert';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    minWidth: 200,
    maxWidth: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid blue',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const AssignChoreModal = (props) => {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    swal('Thank you! This chore has been assigned!');
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">
        {' '}
        <AssignChoreForm callback={handleClose} />
      </h2>
    </div>
  );

  return (
    <div>
      <Button
        variant="outlined"
        size="Medium"
        align="center"
        type="button"
        onClick={handleOpen}
        style={{
          backgroundColor: blueGrey['700'],
          fontFamily: 'nunito',
          color: 'white',
          marginBottom: '5px',
          width: '380px',
          marginTop: '15px',
        }}
      >
        Assign Chores Here
      </Button>{' '}
      <Modal
        open={open}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
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
        type: 'GET_USERS',
      }),
  };
};

export default connect(
  mapStoreToProps,
  mapDispatchToProps
)(withRouter(AssignChoreModal));
