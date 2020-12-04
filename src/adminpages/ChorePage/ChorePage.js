import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import AdminChoreList from '../../components/AdminChoreList/AdminChoreList.js';
import AdminChoresModal from '../../components/AdminAddModals/AddChoreModal.js';

import UserList from '../../components/UserList/UserList.js';
import { Button, Container, Grid, Typography } from '@material-ui/core';

class ChorePage extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'GET_CHORES',
    });
  }

  handleRefresh = () => {
    // by calling this method react re-renders the component
    this.setState({});
  };

  render() {
    return (
      <Container>
        <section>
          <Grid container spacing={10}>
            <Grid item xs={12} sm={12}>
              <Typography
                style={{
                  marginTop: 10,
                  textAlign: 'center',
                  fontFamily: 'Nunito',
                }}
                component="h4"
              >
                <h4> Current Chores</h4>
              </Typography>
              <AdminChoresModal />
              <div>
                <AdminChoreList refresh={this.handleRefresh} />
              </div>
              <hr />
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

export default connect(mapStateToProps)(ChorePage);