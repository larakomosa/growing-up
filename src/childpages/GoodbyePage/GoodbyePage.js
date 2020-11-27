import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button } from '@material-ui/core';

class GoodbyePage extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.history.push('/login'); //moves user to next page
  };

  render() {
    return (
      <div>
        <h2>GoodBye</h2>

        <Button
          variant="outlined"
          color="primary"
          type="submit"
          size="small"
          onClick={this.handleSubmit} //next button dispatches data to index.js and moves user to next page
        >
          LOG BACK IN!
        </Button>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({
  store,
});

export default connect(mapStoreToProps)(withRouter(GoodbyePage));
