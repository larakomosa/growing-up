import React from 'react';
import './Header.css';
import Nav from '../Nav/Nav';
import AppBar from '../AppBar/AppBar'
import AdminAppBar from '../AdminAppBar/AdminAppBar'
import mapStoreToProps from '../../redux/mapStoreToProps';
import { connect } from 'react-redux';
import LogOutButton from '../../components/LogOutButton/LogOutButton';

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
  return (<div>
   <AppBar/> <LogOutButton className="log-in" /></div>
  );
        }else if(props.store.user.page_role_id === 5){  return (<div><AdminAppBar/> <LogOutButton className="log-in" /></div>         
    )}else{  return (
      <h2>hello</h2>


    )}
  
  
  
  
  }

export default connect(mapStoreToProps)(Header);
