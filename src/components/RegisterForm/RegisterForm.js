import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

class RegisterForm extends Component {
  state = {
    username: '',
    password: '',
    page_role_id: '',
  };

  componentDidMount() {
    this.props.dispatch({
      type: 'GET_ROLES',
    });
  }

  registerUser = (event) => {
    event.preventDefault();

    this.props.dispatch({
      type: 'REGISTER',
      payload: {
        username: this.state.username,
        password: this.state.password,
        page_role_id: this.state.page_role_id,
      },
    });
    console.log(
      this.state.username,
      this.state.username,
      this.state.page_role_id
    );
  }; // end registerUser

  handleInputChangeFor = (propertyName) => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  };

  render() {
    return (
      <form className="formPanel" onSubmit={this.registerUser}>
        <h2>Register User</h2>
        {this.props.store.errors.registrationMessage && (
          <h3 className="alert" role="alert">
            {this.props.store.errors.registrationMessage}
          </h3>
        )}
        <div className="formField">
          <TextField
            fullWidth
            size="small"
            id="outlined-helperText"
            label="Username"
            value={this.state.username}
            required
            placeholder="Username"
            onChange={this.handleInputChangeFor('username')}
            variant="outlined"
          />
        </div>
        <div className="formField">
          <TextField
            fullWidth
            size="small"
            id="outlined-helperText"
            label="Password"
            value={this.state.password}
            required
            placeholder="Username"
            onChange={this.handleInputChangeFor('password')}
            variant="outlined"
          />
        </div>
        <div className="formField">
          <TextField
            fullWidth
            size="small"
            id="outlined-select-currency-native"
            value={this.state.page_role_id}
            select
            onChange={this.handleInputChangeFor('page_role_id')}
            placeholder="Select Role"
            variant="outlined"
            SelectProps={{
              native: true,
            }}
          >
            <option value="">Select Role</option>
            {this.props.store.roles.map((option) => (
              <option key={option.value} value={option.id}>
                {option.page_role}
              </option>
            ))}
          </TextField>
        </div>
        <div className="formButton">
          <Button
            variant="outlined"
            color="default"
            type="submit"
            size="medium"
          >
            Register
          </Button>
        </div>
      </form>
    );
  }
}

export default connect(mapStoreToProps)(RegisterForm);
