import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import AdminChoreList from '../../components/AdminChoreList/AdminChoreList.js';
import AdminRewardsList from '../../components/AdminRewardsList/AdminRewardsList.js';
import AdminChoresModal from '../../components/AdminAddModals/AddChoreModal.js';
import AdminRewardModal from '../../components/AdminAddModals/AddRewardModal.js';
import UserList from '../../components/UserList/UserList.js';
import { Button, Container, Grid, Typography } from '@material-ui/core';

class AddPage extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'GET_CHORES',
    });
    {
      this.props.dispatch({
        type: 'GET_ADMIN_REWARDS',
      });
      console.log('dispatch');
    }
  }

  handleRefresh = () => {
    // by calling this method react re-renders the component
    this.setState({});
  };

  render() {
    return (
      <Container>
        <section>
          <Grid container spacing={8}>
            {/* <Grid item xs={12} sm={}>
              <h2>Chore List</h2>
              <AdminChoresModal />
              <div>
                <AdminChoreList refresh={this.handleRefresh} />
              </div>
              <hr />
            </Grid> */}
            <Grid item xs={12} sm={12}>
              <Typography
                style={{
                  marginTop: 10,
                  textAlign: 'center',
                  fontFamily: 'Nunito',
                }}
                component="h4"
              >
                <h4> Current Rewards </h4>
              </Typography>
              <AdminRewardModal className="modal" />
              <div>
                <AdminRewardsList />
              </div>
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

export default connect(mapStateToProps)(AddPage);
