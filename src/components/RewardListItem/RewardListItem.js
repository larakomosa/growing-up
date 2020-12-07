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

  togglingDisplay2 = () => {
    //Function renders element based on state
    if (this.props.item.purchase_status === false) {
      return (
        <div>
          <Typography
            gutterBottom
            variant="p"
            style={{
              color: '#FF6E79',
              fontSize: 20,
              marginBottom: -25,
              marginLeft: 20,
            }}
            component="h2"
          >
            {this.props.item.coin_price} Coins
          </Typography>
          <img
            src="https://primebucket2020.s3.us-east-2.amazonaws.com/174724ea-c0ea-4e4a-abe9-346a3ef847d7_191-magnifying-glass-1.svg"
            className="rewards"
            onClick={() => this.handleClick(this.props.item.id)}
          ></img>
        </div>
      );
    } else {
      return (
        <div>
          <img
            src="https://primebucket2020.s3.us-east-2.amazonaws.com/dfbf830b-6258-4506-aa00-5954bb1856dc_189-balloons-2.svg"
            className="rewards"
          ></img>
          <Typography
            gutterBottom
            variant="p"
            style={{ color: '#FF6E79', fontSize: 20, marginBottom: -10 }}
            component="h2"
          >
            Purchased
          </Typography>
        </div>
      );
    }
  };

  render() {
    return (
      <Grid item xs={12} sm={4} md={3} lg={2} style={{ marginBottom: -10 }}>
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
              <div className="bottom">{this.togglingDisplay2()}</div>
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
