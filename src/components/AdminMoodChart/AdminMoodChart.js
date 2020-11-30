import { LineChart } from 'react-chartkick';
import 'chart.js';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import { withRouter } from 'react-router-dom';

class AdminMoodChart extends React.Component {
  constructor(props) {
    super(props);
    this.chartRef = React.createRef();
  }

  componentDidUpdate() {
    this.myChart.data.labels = this.props.data.map((d) => d.time);
    this.myChart.data.datasets[0].data = this.props.data.map((d) => d.value);
    this.myChart.update();
  }

  componentDidMount() {
    this.myChart = new Chart(this.chartRef.current, {
      type: 'line',
      options: {
        scales: {
          xAxes: [
            {
              type: 'time',
              time: {
                unit: 'week',
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                min: 0,
              },
            },
          ],
        },
      },
      data: {
        labels: this.props.data.map((d) => d.time),
        datasets: [
          {
            label: this.props.title,
            data: this.props.data.map((d) => d.value),
            fill: 'none',
            backgroundColor: this.props.color,
            pointRadius: 2,
            borderColor: this.props.color,
            borderWidth: 1,
            lineTension: 0,
          },
        ],
      },
    });
  }

  render() {
    return <canvas ref={this.chartRef} />;
  }
}

const mapStoreToProps = (store) => ({
  store,
});

const mapDispatchToProps = (dispatch) => {
  return {
    componentDidMount: () =>
      dispatch({
        type: 'GET_FEELINGS',
      }),
  };
};

export default connect(
  mapStoreToProps,
  mapDispatchToProps
)(withRouter(AdminMoodChart));
