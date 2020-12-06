import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import AdminThoughts from '../../components/AdminThoughtsList/AdminThoughtsList.js';
// import  from '../../components/AdminStoreList/AdminStoreList.js';
import { Button, Container, Grid, Typography } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import { LineChart } from 'react-chartkick';
import 'chart.js';
import PersonSelect3 from '../../components/AdminStoreList/PersonSelect3';
import blueGrey from '@material-ui/core/colors/blueGrey';
class EmotionsPage extends Component {
  state = {
    id: '',
  };

  componentDidMount() {
    this.props.dispatch({
      type: 'GET_USERS',
    });
    this.props.dispatch({
      type: 'GET_SURVEY',
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
      type: 'GET_SURVEY',
      payload: this.state.id,
    });
    console.log(this.state.id);
  }; // end login

  handleSubmit2 = (event) => {
    event.preventDefault();
    this.props.dispatch({
      type: 'GET_SURVEY',
      payload: this.state.id,
    });
    console.log(this.state.id);
  }; // end login

  render() {
    return (
      <Container>
        <section>
          {' '}
          <Typography
            gutterBottom
            variant="p"
            style={{
              color: blueGrey,
              fontSize: 30,
              paddingTop: 15,
              fontFamily: 'nunito',
              fontWeight: 'bold',
            }}
            component="h2"
          >
            Moods and Thoughts
          </Typography>
          <Grid container spacing={1}>
            <Grid item xs={2} sm={1}></Grid>
            <Grid item xs={12} sm={4}>
              <div>
                <PersonSelect3 />
                <AdminThoughts />
              </div>
              <hr />
            </Grid>
            <Grid item xs={12} sm={6}>
              <div>
                <PersonSelect3 />
              </div>
              <LineChart
                colors={['', '#666']}
                data={{
                  '2020-11-23': 5,
                  '2020-11-24': 3,
                  '2020-11-25': 4,
                  '2020-11-26': 5,
                  '2020-11-27': 2,
                  '2020-11-28': 4,
                  '2020-11-29': 4,
                  '2020-11-30': 5,
                  '2020-12-01': 2,
                  '2020-12-02': 4,
                  '2020-12-03': 4,
                  '2020-12-04': 5,
                }}
              />
              <hr />
            </Grid>
            <Grid item xs={2} sm={1}></Grid>
          </Grid>
        </section>
      </Container>
    );
  }
}

const mapStateToProps = (store) => ({
  store,
});

export default connect(mapStateToProps)(EmotionsPage);
