import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import RewardConfirmation from '../../components/AdminConfirmation/RewardConfirmation.js';

class RewardConfirmationPage extends Component {
  handleBack = (event) => {
    event.preventDefault();
    console.log('hello');
    this.props.history.push('/admin/add'); //moves user back to home page
  };

  render() {
    return (
      <div>
        <h1> Rewards Confirmation Page </h1>
        <Button
          variant="outlined"
          color="primary"
          type="submit"
          size="medium"
          onClick={() => this.handleBack}
        >
          {' '}
          Back to List!
        </Button>

        <RewardConfirmation />
        <div className="footer"> </div>
      </div>
    );
  }
}
const mapStateToProps = (store) => ({
  store,
});

export default connect(mapStateToProps)(RewardConfirmationPage);
