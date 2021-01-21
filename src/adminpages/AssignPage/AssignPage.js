import React, { Component } from 'react';
import { connect } from 'react-redux';
import AdminAssignedList from '../../components/AdminAssignedList/AdminAssignedList.js';
import AdminStoreList from '../../components/AdminStoreList/AdminStoreList.js';
import { Container, Grid, Typography } from '@material-ui/core';
import AssignChoreModal from '../../components/AdminAddModals/AssignChoreModal.js';
import AssignRewardModal from '../../components/AdminAddModals/AssignRewardModal.js';
import PersonSelect from '../../components/AdminStoreList/PersonSelect';
import PersonSelect2 from '../../components/AdminStoreList/PersonSelect2';
import blueGrey from '@material-ui/core/colors/blueGrey';

class AssignPage extends Component {
  state = {
    id: '',
  };

  componentDidMount() {
    this.props.dispatch({
      type: 'GET_USERS',
    });
    this.props.dispatch({
      type: 'GET_ADMIN_ASSIGNED',
    });
    this.props.dispatch({
      type: 'GET_ADMIN_SELECTED',
    });
  }

  handleInputChangeFor = (propertyName) => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
    console.log('tweet');
  };

  handleInputChangeFor2 = (propertyName) => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
    console.log('tweet');
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.dispatch({
      type: 'GET_ADMIN_ASSIGNED',
      payload: this.state.id,
    });
    console.log(this.state.id);
  }; // end login

  handleSubmit2 = (event) => {
    event.preventDefault();
    this.props.dispatch({
      type: 'GET_ADMIN_STORE',
      payload: this.state.id,
    });
    console.log(this.state.id);
  }; // end login

  render() {
    return (
      <Container>
        <section>
          <h2></h2>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={1}></Grid>
            <Grid item xs={12} sm={5}>
              <div>
                <AssignChoreModal />
                <Typography
                  gutterBottom
                  variant="p"
                  style={{
                    color: blueGrey,
                    fontSize: 28,
                    fontFamily: 'nunito',
                    fontWeight: 'bold',
                  }}
                  component="h2"
                >
                  Current Chore Assignments
                </Typography>
                <PersonSelect /> <AdminAssignedList />
              </div>
              <hr />
            </Grid>
            <Grid item xs={12} sm={5}>
              <div>
                <AssignRewardModal />
                <Typography
                  gutterBottom
                  variant="p"
                  style={{
                    color: blueGrey,
                    fontSize: 28,
                    fontFamily: 'nunito',
                    fontWeight: 'bold',
                  }}
                  component="h2"
                >
                  Currently Selected Rewards
                </Typography>
                <PersonSelect2 />
                <AdminStoreList />
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

export default connect(mapStateToProps)(AssignPage);
