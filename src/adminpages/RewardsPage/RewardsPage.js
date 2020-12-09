import React, { Component } from 'react';
import { connect } from 'react-redux';
import AdminRewardsList from '../../components/AdminRewardsList/AdminRewardsList.js';
import AdminRewardModal from '../../components/AdminAddModals/AddRewardModal.js';
import { Container, Grid, Typography } from '@material-ui/core';
import blueGrey from '@material-ui/core/colors/blueGrey';

class AddPage extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'GET_CHORES',
    });
    this.props.dispatch({
      type: 'GET_REWARDS_TABLE',
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
          <Grid container spacing={8}>
            <Grid item xs={12} sm={12}>
              <Typography
                gutterBottom
                style={{
                  color: blueGrey,
                  fontSize: 28,
                  marginTop: 15,
                  fontFamily: 'nunito',
                  fontWeight: 'bold',
                }}
                component="h2"
              >
                Reward Database
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
