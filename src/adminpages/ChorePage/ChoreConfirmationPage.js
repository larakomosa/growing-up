import React, { Component } from 'react';
import { connect } from 'react-redux';
import ChoreConfirmation from '../../components/AdminConfirmation/ChoreConfirmation.js';

class ChoreConfirmationPage extends Component {
  render() {
    return (
      <div>
        <h1> Chore Added Successfully!</h1>
        <ChoreConfirmation />
        <div className="footer"> </div>
      </div>
    );
  }
}
const mapStateToProps = (store) => ({
  store,
});

export default connect(mapStateToProps)(ChoreConfirmationPage);
