import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import WelcomePage from '../WelcomePage/WelcomePage';
import mapStoreToProps from '../../redux/mapStoreToProps';

class UserPage extends Component {
  // this component doesn't do much to start, just renders some user info to the DOM
  render() {
    return (
      <div>
        <LogOutButton className="log-in" />
        {this.props.store.user.page_role_id === 4 ? (
          <WelcomePage />
        ) : (
          <div>
            <h3>Your Employees</h3>
          </div>
        )}
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(UserPage);
