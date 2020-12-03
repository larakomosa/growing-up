import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button } from '@material-ui/core';
import './WelcomePage.css';
import { Grid } from '@material-ui/core';
import UserList from '../../components/UserList/UserList.js';

class AdminWelcomePage extends Component {
  componentDidMount() {
    //"GETS" movies on page load
    this.props.dispatch({
      type: 'GET_NOTE',
    });
    this.props.dispatch({
      type: 'GET_USERS',
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
      <div className="welcome">
        <Grid
          container
          spacing={0}
          direction="column"
          justify="flex-start"
          alignItems="center"
          style={{ minHeight: '100vh' }}
        >
          <Grid item xs={12} sm={10}>
            <Button
              spacing={2}
              variant="contained"
              color="primary"
              size="large"
              style={{ backgroundColor: '#F7F182', marginBottom: 20 }}
              onClick={this.handleSubmit} //next button dispatches data to index.js and moves user to next page
            >
              <img
                src="https://primebucket2020.s3.us-east-2.amazonaws.com/cb88f6f6-fee3-4f1c-93b9-6b46592227b0_note.svg"
                className="finishLine"
              ></img>
              <h3>Assign</h3>
            </Button>

            {'  '}
            <Button
              variant="contained"
              color="primary"
              type="submit"
              size="large"
              style={{
                backgroundColor: '#F7F182',
                marginLeft: 20,
                marginBottom: 20,
              }}
              onClick={this.handleSubmit2} //next button dispatches data to index.js and moves user to next page
            >
              <img
                src="https://primebucket2020.s3.us-east-2.amazonaws.com/16a8dfcb-57bf-4483-a711-3c9d277f516b_badge.svg"
                className="finishLine"
              ></img>
              <h3>
                <b>Update</b>
              </h3>
            </Button>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              size="large"
              style={{
                backgroundColor: '#F7F182',
                marginLeft: 25,
                marginBottom: 20,
              }}
              onClick={this.handleSubmit3} //next button dispatches data to index.js and moves user to next page
            >
              <img
                src="https://primebucket2020.s3.us-east-2.amazonaws.com/16a8dfcb-57bf-4483-a711-3c9d277f516b_badge.svg"
                className="finishLine"
              ></img>
              <h3>
                <b>Emotions</b>
              </h3>
            </Button>
            <UserList className="userList" />
          </Grid>
        </Grid>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({
  store,
});

export default connect(mapStoreToProps)(withRouter(AdminWelcomePage));
