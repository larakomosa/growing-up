import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button } from '@material-ui/core';
import AssignRewardForm from '../Forms/AssignRewardForm.js';
import '../Forms/Form.css';
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

const AssignRewardModal = (props) => {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    swal('Thank you! This Reward has been added!');
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">
        {' '}
        <AssignRewardForm callback={handleClose} />
      </h2>
    </div>
  );

  return (
    <div>
      <Button
        variant="outlined"
        color="primary"
        size="Medium"
        type="button"
        onClick={handleOpen}
      >
        Assign Rewards!
      </Button>
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
        type: 'GET_ADMIN_REWARDS',
        type: 'GET_USERS',
      }),
  };
};

export default connect(
  mapStoreToProps,
  mapDispatchToProps
)(withRouter(AssignRewardModal));