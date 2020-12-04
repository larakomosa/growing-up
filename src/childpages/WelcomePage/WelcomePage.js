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
    // this.props.dispatch({
    //   type: 'GET_BANK_CHORES',
    // });
    // this.props.dispatch({
    //   type: 'GET_BANK_REWARDS',
    // });
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
              <Button
                spacing={2}
                className="welcomeButtons"
                variant="outlined"
                color="primary"
                size="small"
                style={{ marginRight: 20, marginTop: 2 }}
                onClick={this.handleSubmit} //next button dispatches data to index.js and moves user to next page
              >
                <h6>Chores</h6>
              </Button>

              {'  '}
              <Button
                className="welcomeButtons"
                variant="outlined"
                color="primary"
                type="submit"
                size="small"
                style={{ marginLeft: 20 }}
                onClick={this.handleSubmit2} //next button dispatches data to index.js and moves user to next page
              >
                <h6>Rewards</h6>
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
