import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import React, { Component } from 'react';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';
import Divider from '@material-ui/core/Divider';

class RewardListItem extends Component {
  componentDidMount() {
    //"GETS" movies on page load
    this.props.dispatch({
      type: 'GET_REWARDS',
    });
  }

  handleClick = (id) => {
    //sends user to targeting ID details page/sends ID to reducer
    this.props.history.push(`/details/${this.props.item.id}`);
  };

  render() {
    return (
      <Grid item xs={12} sm={3} md={3} lg={2}>
        <Card>
          <CardActionArea>
            <CardContent onClick={() => this.handleClick(this.props.item.id)}>
              <CardMedia image={this.props.item.icon} />
              <Divider />
              <div className="titleControl">
                <Typography>
                  <h2>{this.props.item.reward}</h2>
                </Typography>
              </div>
              <img
                onClick={this.activateToggle}
                className="imageBox"
                src={this.props.item.image}
                alt={this.props.item.description}
              />
              <div className="bottom">
                <img
                  src="https://primebucket2020.s3.us-east-2.amazonaws.com/2c2d847c-2150-41b3-a193-598694c35274_loupe.svg"
                  className="learnMore"
                  onClick={() => this.handleClick(this.props.item.id)} //next button dispatches data to index.js and moves user to next page
                ></img>
                <Typography
                  gutterBottom
                  variant="p"
                  style={{ color: '#ee8673' }}
                  component="h2"
                >
                  {this.props.item.coin_price} Coins
                </Typography>
              </div>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    );
  }
}

const mapStoreToProps = (store) => ({
  store,
});

export default withRouter(connect(mapStoreToProps)(RewardListItem));
