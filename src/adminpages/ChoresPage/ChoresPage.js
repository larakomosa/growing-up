import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ChoreList from '../../components/ChoreList/ChoreList.js';
import UserList from '../../components/UserList/UserList.js';
import { Button, Container, Grid, Typography } from '@material-ui/core';

class AddChoresPage extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'GET_CHORES',
    });
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
            <Grid item xs={12} sm={4}>
              <h2>Details</h2>
              <Button
                onClick={this.handleBack}
                variant="contained"
                color="primary"
              >
                ADD CHORE
              </Button>
              <UserList />
            </Grid>
            <Grid item xs={12} sm={8}>
              <Typography gutterBottom variant="h5" component="h5">
                <h5> Chores</h5>
              </Typography>
              <Typography gutterBottom variant="body1" component="h6">
                <h2>
                  {' '}
                  <ChoreList />
                </h2>
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

export default connect(mapStateToProps)(AddChoresPage);
