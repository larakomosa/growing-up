import React, { Component } from 'react';
import { connect } from 'react-redux';
import AdminThoughts from '../../components/AdminThoughtsList/AdminThoughtsList.js';
// import AdminChart from '../../components/AdminThoughtsItem/AdminChart.js';
import { Container, Grid, Typography } from '@material-ui/core';
import { LineChart } from 'react-chartkick';
import 'chart.js';
import PersonSelect3 from '../../components/AdminStoreList/PersonSelect3';
import ParentNote from '../../components/AdminAddModals/ParentNote';
import blueGrey from '@material-ui/core/colors/blueGrey';

class EmotionsPage extends Component {
  // state = {
  //   // For loop will spread this state and build the anxietyData objet with dates: values,
  //   dataOne: {
  //   name: 'Anxiety',
  //   anxietyData: {},
  //   },
  //   // For loop will spread this state and build the feelingsData objet with dates: values,
  //   dataTwo: {
  //   name: 'Feelings',
  //   feelingsData: {},
  //   },
  // };

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
    // declare variables so they're available outside the for loop
    // let date;
    // let anxiety;
    // let feelings;
    // for (let i = 0; i < this.props.store.emotions.length; i++) {
    //   date = this.props.store.emotions[i].date.substring[(5, 10)];
    //   anxiety = this.props.store.emotions[i].anxiety;
    //   feelings = this.props.store.emotions[i].feelings;

    //   // build the object in the local state dataOne
    //   this.setState({
    //     anxietyData: {
    //       ...this.state.anxietyData,
    //       date: Number(anxiety),
    //     },
    //   });

    //   // build the object in the local state dataTwo
    //   this.setState({
    //     feelingsData: {
    //       ...this.state.feelingsData,
    //       date: Number(feelings),
    //     },
    //   });
    // }

    // After the for loop fills out the local state
    // create the final array of data for the chart by using the two states
    // one state for each line
    // let dataFinal = [this.state.dateOne, this.state.dataTwo];

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
            <Grid item xs={10} sm={10}>
              <div>
                <ParentNote />
                <PersonSelect3 />
                <AdminThoughts />
              </div>
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
