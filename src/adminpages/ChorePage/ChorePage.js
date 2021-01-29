import React, { Component } from 'react';
import { connect } from 'react-redux';
import AdminChoreList from '../../components/AdminChoreList/AdminChoreList.js';
import AdminChoresModal from '../../components/AdminAddModals/AddChoreModal.js';
import blueGrey from '@material-ui/core/colors/blueGrey';
import { Container, Grid, Typography } from '@material-ui/core';

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
          <Grid container spacing={8}>
            <Grid item xs={1} sm={1}></Grid>
            <Grid item xs={10} sm={10}>
              <AdminChoresModal />
              <Typography
                gutterBottom
                style={{
                  color: blueGrey,
                  fontSize: 28,
                  marginTop: 0,
                  marginBottom: -5,
                  fontFamily: 'nunito',
                  fontWeight: 'bold',
                }}
                component="h2"
              >
                Chore Database
              </Typography>
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
