import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button } from '@material-ui/core';

class SleepPage extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.history.push('/anxiety'); //moves user to next page
  };

  render() {
    return (
      <div>
        <h2>Sleep</h2>
        <Button
          variant="outlined"
          color="primary"
          type="submit"
          size="small"
          onClick={this.handleSubmit} //next button dispatches data to index.js and moves user to next page
        >
          Next &#x2192;
        </Button>
      </div>
    );
  }
}
const mapStoreToProps = (store) => ({
  store,
});

export default connect(mapStoreToProps)(withRouter(SleepPage));
