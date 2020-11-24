import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import mapStoreToProps from '../../redux/mapStoreToProps';

const Nav = (props) => {
  let loginLinkData = {
    path: '/login',
    text: 'Login / Register',
  };

  if (props.store.user.id != null) {
    loginLinkData.path = '/user';
    loginLinkData.text = 'Home';
  }

  if (props.store.user.page_role_id === 4) {
  return (
    <div className="nav">
      <Link to="/home">
        <h2 className="nav-title">Child</h2>
      </Link>
      <div className="nav-right">
        <Link className="nav-link" to={loginLinkData.path}>
          {/* Show this link if they are logged in or not,
          but call this link 'Home' if they are logged in,
          and call this link 'Login / Register' if they are not */}
          {loginLinkData.text}
        </Link>
        {/* Show the link to the info page and the logout button if the user is logged in */}
        {props.store.user.id && (
          <>
            <Link className="nav-link" to="/childchores">
              Chores
            </Link>
            <Link className="nav-link" to="/childrewards">
              Rewards
            </Link>
            <LogOutButton className="nav-link" />
          </>
        )}
      </div>
    </div>
  );
        }else if(props.store.user.page_role_id === 5){  return (
    <div className="nav">
      <Link to="/home">
        <h2 className="nav-title">Adult</h2>
      </Link>
       <div className="nav-right">
        <Link className="nav-link" to={loginLinkData.path}>
          {/* Show this link if they are logged in or not,
          but call this link 'Home' if they are logged in,
          and call this link 'Login / Register' if they are not */}
          {loginLinkData.text}
        </Link>
        {/* Show the link to the info page and the logout button if the user is logged in */}
        {props.store.user.id && (
          <>
            <Link className="nav-link" to="/adminchores">
              Add Chores
            </Link>
              <Link className="nav-link" to="/adminassign">
              Assign Chores
            </Link>
              <Link className="nav-link" to="/adminrewards">
              Add Rewards
            </Link>
              <Link className="nav-link" to="/adminstore">
              Assign Rewards
            </Link>
            <Link className="nav-link" to="/adminemotions">
              Emotions
            </Link>
            <LogOutButton className="nav-link" />
          </>
        )}
      </div>
      </div>
    )}else{  return (
    <div className="nav">
      <Link to="/home">
        <h2 className="nav-title">General</h2>
      </Link>
      </div>
    )}
  
  
  
  
  }

export default connect(mapStoreToProps)(Nav);
