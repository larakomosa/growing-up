import React, { Component } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import blueGrey from '@material-ui/core/colors/blueGrey';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { withRouter } from 'react-router-dom';
import { LineChart } from 'react-chartkick';
import 'chart.js';

class AdminChart extends Component {
  state = {
    // For loop will spread this state and build the anxietyData objet with dates: values,
    dataOne: {
      name: 'Anxiety',
      anxietyData: {},
    },
    // For loop will spread this state and build the feelingsData objet with dates: values,
    dataTwo: {
      name: 'Feelings',
      feelingsData: {},
    },
  };

  // componentDidMount() {
  //   this.props.dispatch({
  //     type: 'GET_SURVEY',
  //     // payload: this.props.match.params.id,
  //   });
  // }

  render() {
    // declare variables so they're available outside the for loop
    let date;
    let anxiety;
    let feelings;
    for (let i = 0; i < this.props.store.adminEmotions.length; i++) {
      date = this.props.store.adminEmotions[i].date.substring[(5, 10)];
      anxiety = this.props.store.adminEmotions[i].anxiety;
      feelings = this.props.store.adminEmotions[i].feelings;

      // build the object in the local state dataOne
      this.setState({
        anxietyData: {
          ...this.state.anxietyData,
          date: Number(anxiety),
        },
      });

      // build the object in the local state dataTwo
      this.setState({
        feelingsData: {
          ...this.state.feelingsData,
          date: Number(feelings),
        },
      });
    }

    // After the for loop fills out the local state
    // create the final array of data for the chart by using the two states
    // one state for each line
    let dataFinal = [this.state.dateOne, this.state.dataTwo];
    return {
      /* This is the array with the two local states
              that were built in the for loop
              give the data to LineChart to display it */
    };
    //   <LineChart data={dataFinal} />
  }
}

export default withRouter(connect(mapStoreToProps)(AdminChart));
