import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button } from '@material-ui/core';
import './WelcomePage.css';
import { Grid, Typography } from '@material-ui/core';

class WelcomePage extends Component {
  componentDidMount() {
    //"GETS" movies on page load
    this.props.dispatch({
      type: 'GET_NOTE',
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.history.push('/child/chores'); //moves user to next page
  };

  handleSubmit2 = (event) => {
    event.preventDefault();
    this.props.history.push('/child/rewards'); //moves user to next page
  };

  render() {
    return (
      <div className="fixed">
        <div className="welcome">
          <Grid
            container
            spacing={0}
            direction="column"
            justify="flex-start"
            alignItems="center"
            style={{ minHeight: '100vh' }}
          >
            <Grid item className="note" xs={12} sm={10}>
              <Typography
                style={{
                  fontFamily: 'nunito',
                  marginBottom: 0,
                  marginTop: 20,
                  fontSize: 45,
                }}
                component="h2"
              >
                {this.props.store.note.message}
              </Typography>
              <img
                src="https://primebucket2020.s3.us-east-2.amazonaws.com/45d41b9e-7a26-45eb-ae03-bc4f2cef6e25_186-list-1.svg"
                className="navBar4"
                onClick={this.handleSubmit}
                style={{ marginTop: 2, marginRight: 20 }}
              ></img>

              {'  '}
              <img
                src="https://primebucket2020.s3.us-east-2.amazonaws.com/ee8b88d0-7812-49f4-9032-c66fb706e831_200-gift-3.svg"
                className="navBar5"
                onClick={this.handleSubmit2}
                style={{ marginTop: 2, marginLeft: 20 }}
              ></img>

              <br />
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({
  store,
});

export default connect(mapStoreToProps)(withRouter(WelcomePage));
