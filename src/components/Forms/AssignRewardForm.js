import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button } from '@material-ui/core';
import swal from 'sweetalert';

class AssignRewardForm extends Component {
  state = {
    storeAssign: {
      child_id: '',
      reward_id: '',
    },
  };

  componentDidMount() {
    this.props.dispatch({
      type: 'GET_ADMIN_REWARDS',
    });
    this.props.dispatch({
      type: 'GET_USERS',
    });
  }
  handleChange = (propertyName) => (event) => {
    //captures values for inputted information
    this.setState({
      storeAssign: {
        ...this.state.storeAssign,
        child_id: event.target.value,
      },
    });
  };

  handleChange2 = (propertyName) => (event) => {
    //captures values for inputted information
    this.setState({
      storeAssign: {
        ...this.state.storeAssign,
        reward_id: event.target.value,
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
      this.state.storeAssign.child_id === '' ||
      this.state.storeAssign.reward_id === ''
    ) {
      swal('Please complete all input fields');
    } else {
      swal('Thank you! This reward has been assigned!');
      this.props.dispatch({
        type: 'ASSIGN_STORE',
        payload: this.state.storeAssign,
      });
      this.props.callback();
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
            value={this.state.storeAssign.child_id}
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
            value={this.state.storeAssign.reward_id}
            select
            onChange={this.handleChange2('reward_id')}
            placeholder="Select Child"
            variant="outlined"
            SelectProps={{
              native: true,
            }}
          >
            <option value="">Select a Reward</option>
            {this.props.store.adminRewards.map((option) => (
              <option key={option.value} value={option.id}>
                {option.reward}
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
      </form>
    );
  }
}

const mapStoreToProps = (store) => ({
  store,
});

export default connect(mapStoreToProps)(withRouter(AssignRewardForm));
