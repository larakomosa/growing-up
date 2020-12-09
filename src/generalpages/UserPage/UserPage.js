import React, { Component } from 'react';
import { connect } from 'react-redux';
import FeelingPage from '../../childpages/FeelingSurveys/FeelingPage';
import EmotionsPage from '../../adminpages/EmotionsPage/EmotionsPage';
import mapStoreToProps from '../../redux/mapStoreToProps';

class UserPage extends Component {
  componentDidMount() {
    //"GETS" movies on page load
    this.props.dispatch({
      type: 'GET_USERS',
    });
  }
  render() {
    return (
      <div>
        {this.props.store.user.page_role_id === 4 ? (
          <FeelingPage />
        ) : (
          <EmotionsPage />
        )}
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(UserPage);
