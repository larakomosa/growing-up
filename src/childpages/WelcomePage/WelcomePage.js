import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button } from '@material-ui/core';
import '../WelcomePage/WelcomePage.css';
import { Grid } from '@material-ui/core';

class WelcomePage extends Component {
  componentDidMount() {
    //"GETS" movies on page load
    this.props.dispatch({
      type: 'GET_NOTE',
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
            <h4>{this.props.store.note.message}</h4>
            <Button
              variant="outlined"
              color="primary"
              size="large"
              onClick={this.handleSubmit} //next button dispatches data to index.js and moves user to next page
            >
              See Chores
            </Button>
            {'  '}
            <Button
              variant="outlined"
              color="primary"
              type="submit"
              size="large"
              onClick={this.handleSubmit2} //next button dispatches data to index.js and moves user to next page
            >
              See Rewards
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({
  store,
});

export default connect(mapStoreToProps)(withRouter(WelcomePage));
