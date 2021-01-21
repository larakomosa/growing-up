import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button } from '@material-ui/core';
import './WelcomePage.css';
import { Grid, Typography } from '@material-ui/core';
import UserList from '../../components/UserList/UserList.js';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import blueGrey from '@material-ui/core/colors/blueGrey';

class AdminWelcomePage extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'GET_FULL_LIST',
    });
    console.log('dispatch)');
  }

  handleSubmit2 = (event) => {
    event.preventDefault();
    this.props.history.push('/admin/add'); //moves user to next page
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.history.push('/admin/assign'); //moves user to next page
  };

  handleSubmit3 = (event) => {
    event.preventDefault();
    this.props.history.push('/admin/emotions'); //moves user to next page
  };

  render() {
    return (
      <div>
        <Typography
          gutterBottom
          style={{
            color: blueGrey,
            fontSize: 30,
            paddingTop: 15,
            fontFamily: 'nunito',
            fontWeight: 'bold',
          }}
          component="h2"
        >
          Welcome {this.props.store.user.username}
        </Typography>
        <Grid container spacing={2} alignContent="center">
          <Grid item xs={6} sm={1}></Grid>
          <Grid item xs={12} sm={4}>
            <RegisterForm />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography
              gutterBottom
              style={{
                color: blueGrey,
                fontSize: 20,
                paddingTop: 15,
                fontFamily: 'nunito',
                fontWeight: 'bold',
              }}
              component="h2"
            >
              Registered Users
            </Typography>
            <UserList />
          </Grid>
          <Grid item xs={6} sm={1}></Grid>
        </Grid>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({
  store,
});

export default connect(mapStoreToProps)(withRouter(AdminWelcomePage));
