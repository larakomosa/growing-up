import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

import { Button } from '@material-ui/core';

// CUSTOM COMPONENTS
import RegisterForm from '../../components/RegisterForm/RegisterForm';

class RegisterPage extends Component {
  state = {
    username: '',
    password: '',
    page_role_id: '',
  };

  render() {
    return (
      <div>
        <RegisterForm />

        <center>
          <Button
            variant="outlined"
            color="default"
            type="submit"
            size="small"
            onClick={() => {
              this.props.history.push('/login');
            }}
          >
            Login
          </Button>
        </center>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(RegisterPage);
