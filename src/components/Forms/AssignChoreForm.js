import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button, Container, Grid, Typography } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import swal from 'sweetalert';

class AssignChoreForm extends Component {
  state = {
    choreAssign: {
      child_id: '',
      chore_id: '',
    },
  };

  componentDidMount() {
    this.props.dispatch({
      type: 'GET_CHORES',
    });
    this.props.dispatch({
      type: 'GET_USERS',
    });
  }
  handleChange = (propertyName) => (event) => {
    //captures values for inputted information
    this.setState({
      choreAssign: {
        ...this.state.choreAssign,
        child_id: event.target.value,
      },
    });
    console.log(this.state.choreAssign);
  };

  handleChange2 = (propertyName) => (event) => {
    //captures values for inputted information
    this.setState({
      choreAssign: {
        ...this.state.choreAssign,
        chore_id: event.target.value,
      },
    });
    console.log(this.state.choreAssign);
  };

  handleCancel = (event) => {
    //captures values for inputted information
    console.log('meow, meow');
    this.props.callback();
  };

  handleSubmitting = (event) => {
    if (
      //requires user to fill all fields
      this.state.choreAssign.child_id === '' ||
      this.state.choreAssign.chore_id === ''
    ) {
      swal('Please complete all input fields');
    } else {
      this.props.dispatch({
        type: 'ASSIGN_CHORE',
        payload: this.state.choreAssign,
      });
      this.props.callback();
      console.log('chore', this.state.choreAssign);
    }
  };

  render() {
    return (
      <form>
        <div className="formField">
          <TextField
            fullWidth
            size="small"
            id="outlined-select-currency-native"
            value={this.state.choreAssign.child_id}
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
        </div>
        <div className="formField">
          <TextField
            fullWidth
            size="small"
            id="outlined-select-currency-native"
            value={this.state.choreAssign.chore_id}
            select
            onChange={this.handleChange2('chore_id')}
            placeholder="Select Chore"
            variant="outlined"
            SelectProps={{
              native: true,
            }}
          >
            <option value="">Select a Chore</option>
            {this.props.store.chores.map((option) => (
              <option key={option.value} value={option.id}>
                {option.chore}
              </option>
            ))}
          </TextField>
        </div>
        <div className="buttonControl">
          <Button
            variant="outlined"
            color="primary"
            size="Medium"
            type="button"
            onClick={this.handleSubmitting}
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
      </form>
    );
  }
}

const mapStoreToProps = (store) => ({
  store,
});

export default connect(mapStoreToProps)(withRouter(AssignChoreForm));
