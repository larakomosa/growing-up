import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import AdminStoreList1 from '../../components/AdminStoreList/AdminStoreList1.js';
import AdminStoreList2 from '../../components/AdminStoreList/AdminStoreList2.js';
import { Button, Container, Grid, Typography } from '@material-ui/core';

class StorePage extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'GET_ADMIN_STORE1',
    });
    this.props.dispatch({
      type: 'GET_ADMIN_STORE2',
    });
    console.log('dispatch');
  }

  render() {
    return (
      <Container>
        <section>
          <h2>AdminStore</h2>
          <Grid container spacing={8}>
            <Grid item xs={12} sm={6}>
              <div>
                <AdminStoreList1 />
              </div>
              <hr />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography gutterBottom variant="h5" component="h5"></Typography>
              <Typography gutterBottom variant="body1" component="h6">
                <AdminStoreList2 />
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

export default connect(mapStateToProps)(StorePage);
