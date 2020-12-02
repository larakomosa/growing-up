import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

import './LandingPage.css';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

class LandingPage extends Component {
  state = {
    heading: 'Growing Up Application',
  };

  onLogin = (event) => {
    this.props.history.push('/login');
  };

  render() {
    return (
      <div className="container">
        <h4>{this.state.heading}</h4>

        <div className="grid">
          <div className="grid-col grid-col_8">
            <p>
              Growing up is a fun, kid-friendly parent/child application that
              assists children in middle childhood (7-11 years old) develop good
              habits, practice responsibility and acknowledge their own emotions
              and feelings with positive reinforcement. Admin users assign
              chores and tasks to a child user who will complete them to earn
              coins. A Rewards page will display a gallery of (admin input)
              rewards children can purchase with earned coins.
            </p>
            <br />
            <p>
              An emotion survey page will allow a child the ability to convey
              their mood, sleep and anxiety levels for the day as well. Surveyed
              information will be stored on an admin page for pages to track and
              monitor their children’s mental health. Very often, children feel
              more comfortable writing or sharing their feelings through
              non-verbal communication. Middle childhood is an important and
              sometimes awkward transition! As kids progress towards more
              independence, this application can be a helpful tool to guide
              them!
            </p>
          </div>
          <div className="grid-col grid-col_4">
            <RegisterForm />

            <center>
              <h6>Already a Member?</h6>
              <button className="btn btn_sizeSm" onClick={this.onLogin}>
                Login
              </button>
            </center>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(LandingPage);
