import React from 'react';
import './Header.css';
import AppBar from '../AppBar/AppBar';
import AdminAppBar from '../AdminAppBar/AdminAppBar';
import AppBarHome from '../AppBarHome/AppBarHome';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { connect } from 'react-redux';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const Header = (props) => {
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
      <div>
        <AppBar />
      </div>
    );
  } else if (props.store.user.page_role_id === 5) {
    return (
      <div>
        <AdminAppBar />
      </div>
    );
  } else {
    return (
      <div>
        <AppBarHome />
      </div>
    );
  }
};

export default connect(mapStoreToProps)(Header);
