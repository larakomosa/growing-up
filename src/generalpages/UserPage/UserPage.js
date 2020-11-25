import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../../components/LogOutButton/LogOutButton';
import WelcomePage from '../../childpages/WelcomePage/WelcomePage';
import AdminWelcomePage from '../../adminpages/AdminWelcomePage/AdminWelcomePage';
import mapStoreToProps from '../../redux/mapStoreToProps';

class UserPage extends Component {
  // this component doesn't do much to start, just renders some user info to the DOM
  render() {
    return (
  
      <div>
            <LogOutButton/>
        {this.props.store.user.page_role_id === 4 ? (
          <WelcomePage />
        ) : (
      <AdminWelcomePage />
        )}
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(UserPage);
