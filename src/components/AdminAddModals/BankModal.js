import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button } from '@material-ui/core';
import Bank from '../Bank/Bank';
import '../Forms/Form.css';
import blueGrey from '@material-ui/core/colors/blueGrey';

function getModalStyle() {
  const top = 12;
  const left = 40;

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
    maxWidth: 200,
    backgroundColor: blueGrey['700'],
    color: 'white',
    boxShadow: theme.shadows[5],
    paddingBottom: 10,
  },
}));

const BankModal = (props) => {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">
        {' '}
        <img
          src="https://primebucket2020.s3.us-east-2.amazonaws.com/f6c06c18-851c-45d3-ba88-5fd41b20bcce_197-piggy-bank-14.svg"
          className="piggy"
          onClick={handleClose}
          style={{ marginBottom: -45, marginTop: -25 }}
        ></img>
        <Bank />
        {handleClose}
      </h2>
    </div>
  );

  return (
    <div>
      <img
        src="https://primebucket2020.s3.us-east-2.amazonaws.com/f6c06c18-851c-45d3-ba88-5fd41b20bcce_197-piggy-bank-14.svg"
        className="piggy"
        onClick={handleOpen}
        style={{ marginBottom: -25, marginTop: -25 }}
      ></img>
      <Modal
        open={open}
        onClose={handleClose}
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
        type: 'GET_BANK_CHORES',
        type: 'GET_BANKS-REWARDS',
      }),
  };
};

export default connect(
  mapStoreToProps,
  mapDispatchToProps
)(withRouter(BankModal));
