import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import { withRouter } from 'react-router-dom';

class RewardsPage extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.history.push('/childhome'); //moves user to next page
  };

  render() {
    return (
      <div>
        <h2>RewardsPage</h2>
        <Button
          variant="outlined"
          color="primary"
          type="submit"
          size="small"
          onClick={this.handleSubmit} //next button dispatches data to index.js and moves user to next page
        >
          Back to Chores;
        </Button>
      </div>
    );
  }
}
const mapStoreToProps = (store) => ({
  store,
});

export default connect(mapStoreToProps)(withRouter(RewardsPage));