import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button, Typography } from '@material-ui/core';
import swal from 'sweetalert';
import DropzoneS3Uploader from 'react-dropzone-s3-uploader';

const dropStyles = {
  width: '210px',
  height: '40px',
  marginLeft: '5px',
  marginBottom: '10px',
  border: '1px grey dotted',
  placeholder: 'image',
  label: 'image',
  textAlign: 'center',
  justify: 'center',
  borderRadius: 'borderRadius',
};

class Form extends Component {
  state = {
    newReward: {
      reward: '',
      image: '',
      coin_price: '',
      description: '',
    },
  };

  handleFinishedUpload = (info) => {
    console.log(info);
    console.log('File uploaded with filename', info.filename);
    console.log('Access it on s3 at', info.fileUrl);
    const image = info.fileUrl;
    this.setState({
      newReward: {
        ...this.state.newReward,
        image: image,
      },
    });
  };

  handleChange = (propertyName) => (event) => {
    //captures values for inputted information
    this.setState({
      newReward: {
        ...this.state.newReward,
        [propertyName]: event.target.value,
      },
    });
  };

  handleCancel = (event) => {
    //captures values for inputted information
    console.log('meow, meow');
    this.props.callback();
  };

  handleSubmit = (event) => {
    event.preventDefault(); // TODO - axios request to server to add movie

    if (
      //requires user to fill all fields
      this.state.newReward.reward === '' ||
      this.state.newReward.coin_price === '' ||
      this.state.newReward.description === ''
    ) {
      swal('Please complete all input fields');
    } else {
      this.props.dispatch({
        type: 'POST_REWARD',
        payload: this.state.newReward, //sends newMovie values
      });
      swal({
        title: 'Reward Has Been Submitted',
        text: 'Would you like to see a child preview?',
        buttons: ['No Thanks', 'Yes Please'],
      }).then((willSubmit) => {
        if (willSubmit) {
          this.props.history.push('/admin/reward/confirmation');
        } else {
          this.props.callback();
        }
      });
    }
  };

  render() {
    const uploadOptions = {
      server: 'http://localhost:5000',
      // signingUrlQueryParams: { uploadType: 'avatar' },
    };
    //'https://growing-up.herokuapp.com'

    const s3Url = 'https://primebucket2020.s3.amazonaws.com';

    return (
      <form>
        Add New Reward
        <div className="formField">
          <TextField
            fullWidth
            size="small"
            id="outlined-helperText"
            label="Reward"
            value={this.state.newReward.reward}
            placeholder="Add Reward Here"
            onChange={this.handleChange('reward')}
            variant="outlined"
          />{' '}
        </div>
        <div className="uploader">
          <DropzoneS3Uploader
            style={dropStyles}
            children={
              <Typography
                gutterBottom
                variant="p"
                style={{
                  fontSize: 15,
                  paddingTop: 8,
                  paddingLeft: 10,
                  fontFamily: 'nunito',
                  color: '#A8A8A8',
                  fontStyle: 'italic',
                  textAlign: 'left',
                  fontWeight: 'bold',
                }}
                component="h2"
              >
                Upload Photo Here
              </Typography>
            }
            onFinish={this.handleFinishedUpload}
            s3Url={s3Url}
            maxSize={1024 * 1024 * 5}
            upload={uploadOptions}
          />
        </div>
        <div className="formField">
          <TextField
            fullWidth
            size="small"
            id="outlined-helperText"
            label="Coin Price"
            placeholder="Enter Coin Price"
            variant="outlined"
            value={this.state.newReward.coin_price}
            onChange={this.handleChange('coin_price')}
          />
        </div>
        <div className="formField">
          <TextField
            className="inner-drop"
            fullWidth
            size="small"
            label="Description"
            placeholder="Add Description"
            multiline
            rows={2}
            variant="outlined"
            value={this.state.newReward.description}
            onChange={this.handleChange('description')}
          />
        </div>
        <div className="buttonControl">
          <Button
            style={{
              color: 'grey',
            }}
            variant="outlined"
            color="primary"
            size="Medium"
            type="button"
            onClick={this.handleSubmit}
          >
            Submit
          </Button>{' '}
          <Button
            style={{
              color: '#698399',
            }}
            variant="outlined"
            color="primary"
            size="Medium"
            type="button"
            onClick={this.handleCancel}
          >
            Cancel
          </Button>
        </div>
      </form>
    );
  }
}

const mapStoreToProps = (store) => ({
  store,
});

export default connect(mapStoreToProps)(withRouter(Form));
