import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button } from '@material-ui/core';
import Form from '../Forms/RewardForm.js';
import '../Forms/Form.css';
import blueGrey from '@material-ui/core/colors/blueGrey';

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
    border: '4 solid blueGrey',
    boxShadow: theme.shadows[0],
    padding: theme.spacing(2, 4, 3),
  },
}));

const AddRewardModal = (props) => {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    window.location.reload();
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">
        {' '}
        <Form callback={handleClose} />
      </h2>
    </div>
  );

  return (
    <div>
      <Button
        variant="outlined"
        color="primary"
        size="Medium"
        align="center"
        type="button"
        onClick={handleOpen}
        style={{
          color: blueGrey['700'],
          marginBottom: '5px',
          marginTop: '-40px',
          float: 'right',
        }}
      >
        Add Rewards
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
        type: 'GET_CATEGORY',
      }),
  };
};

export default connect(
  mapStoreToProps,
  mapDispatchToProps
)(withRouter(AddRewardModal));
