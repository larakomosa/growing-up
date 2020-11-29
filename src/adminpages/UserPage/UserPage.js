import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import UserList from '../../components/UserList/UserList.js';
import { Button, Container, Grid, Typography } from '@material-ui/core';

class UserPage extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'GET_USERS',
    });
    console.log('dispatch');
  }

  render() {
    return (
      <Container>
        <section>
          <Grid container spacing={8}>
            <Grid item xs={6} sm={6}>
              <UserList />
            </Grid>
            <Grid item xs={12} sm={12}>
              <Typography gutterBottom variant="h5" component="h5">
                <h5> Users </h5>
              </Typography>
              <hr />
              <div></div>
            </Grid>
          </Grid>
        </section>
      </Container>
    );
  }
}

const mapStateToProps = (store) => ({
  store,
});

export default connect(mapStateToProps)(UserPage);
