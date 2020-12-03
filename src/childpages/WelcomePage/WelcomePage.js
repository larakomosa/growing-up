import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button } from '@material-ui/core';
import './WelcomePage.css';
import { Grid } from '@material-ui/core';
import Bank from '../../components/Bank/Bank.js';

class WelcomePage extends Component {
  componentDidMount() {
    //"GETS" movies on page load
    this.props.dispatch({
      type: 'GET_NOTE',
    });
    this.props.dispatch({
      type: 'GET_BANK_CHORES',
    });
    this.props.dispatch({
      type: 'GET_BANK_REWARDS',
    });
    console.log('dispatch)');
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
              <h4>{this.props.store.note.message}</h4>
              <Bank />
              <Button
                spacing={2}
                className="welcomeButtons"
                variant="outlined"
                color="primary"
                size="large"
                style={{ backgroundColor: '#F7F182', marginRight: 20 }}
                onClick={this.handleSubmit} //next button dispatches data to index.js and moves user to next page
              >
                <img
                  src="https://primebucket2020.s3.us-east-2.amazonaws.com/cb88f6f6-fee3-4f1c-93b9-6b46592227b0_note.svg"
                  className="finishLine"
                ></img>
                <h3>See Chores</h3>
              </Button>

              {'  '}
              <Button
                className="welcomeButtons"
                variant="outlined"
                color="primary"
                type="submit"
                size="large"
                style={{ backgroundColor: '#F7F182', marginLeft: 20 }}
                onClick={this.handleSubmit2} //next button dispatches data to index.js and moves user to next page
              >
                <img
                  src="https://primebucket2020.s3.us-east-2.amazonaws.com/16a8dfcb-57bf-4483-a711-3c9d277f516b_badge.svg"
                  className="finishLine"
                ></img>
                <h3>
                  <b>See Rewards</b>
                </h3>
              </Button>
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
