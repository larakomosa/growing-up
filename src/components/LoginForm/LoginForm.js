import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
  };

  login = (event) => {
    event.preventDefault();

    if (this.state.username && this.state.password) {
      this.props.dispatch({
        type: 'LOGIN',
        payload: {
          username: this.state.username,
          password: this.state.password,
        },
      });
    } else {
      this.props.dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  }; // end login

  handleInputChangeFor = (propertyName) => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  };

  render() {
    return (
      <form className="formPanel" onSubmit={this.login}>
        <h2>Login</h2>
        {this.props.store.errors.loginMessage && (
          <h3 className="alert" role="alert">
            {this.props.store.errors.loginMessage}
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
        <div className="formButton2">
          <Button
            variant="outlined"
            color="default"
            type="submit"
            size="medium"
          >
            Login
          </Button>
        </div>
      </form>
    );
  }
}

export default connect(mapStoreToProps)(LoginForm);
