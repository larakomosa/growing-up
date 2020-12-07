import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button, Container, Grid, Typography } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import swal from 'sweetalert';

class ParentNoteForm extends Component {
  state = {
    newNote: {
      child_id: '',
      message: '',
    },
  };

  componentDidMount() {
    this.props.dispatch({
      type: 'GET_USERS',
    });
  }

  handleChange = (propertyName) => (event) => {
    //captures values for inputted information
    this.setState({
      newNote: {
        ...this.state.newNote,
        [propertyName]: event.target.value,
      },
    });
  };

  handleCancel = (event) => {
    //captures values for inputted information
    console.log('meow, meow');
    this.props.callback();
  };

  handleSubmit = (event) => {
    event.preventDefault(); // TODO - axios request to server to add movie

    if (
      //requires user to fill all fields
      this.state.newReward.child_id === '' ||
      this.state.newReward.message === ''
    ) {
      swal('Please complete all input fields');
    } else {
      this.props.dispatch({
        type: 'POST_NOTE',
        payload: this.state.newNote, //sends newMovie values
      });
      this.props.callback();
    }
  };

  render() {
    return (
      <form>
        <div>
          <TextField
            fullWidth
            size="small"
            id="outlined-select-currency-native"
            value={this.state.newNote.child_id}
            select
            onChange={this.handleChange('child_id')}
            placeholder="Select Child"
            variant="outlined"
            SelectProps={{
              native: true,
            }}
          >
            <option value="">Select a Child</option>
            {this.props.store.userList.map((option) => (
              <option key={option.value} value={option.id}>
                {option.username}
              </option>
            ))}
          </TextField>

          <div className="formField">
            <TextField
              fullWidth
              size="small"
              label="Message"
              placeholder="Message"
              multiline
              rows={3}
              variant="outlined"
              value={this.state.newNote.message}
              onChange={this.handleChange('message')}
            />
          </div>
          <div className="buttonControl">
            <Button
              variant="outlined"
              color="primary"
              size="Medium"
              type="button"
              onClick={this.handleSubmit}
            >
              Submit
            </Button>{' '}
            <Button
              variant="outlined"
              color="primary"
              size="Medium"
              type="button"
              onClick={this.handleCancel}
            >
              Cancel
            </Button>
          </div>
        </div>
      </form>
    );
  }
}

const mapStoreToProps = (store) => ({
  store,
});

export default connect(mapStoreToProps)(withRouter(ParentNoteForm));
