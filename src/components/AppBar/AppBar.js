import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import BankModal from '../AdminAddModals/BankModal';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: 'translucent',
  },
  toolbar: {
    minHeight: 128,
    alignItems: 'flex-end',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
  },
  home: {
    minHeight: 50,
    paddingTop: theme.spacing(4),
  },
  title: {
    flexGrow: 1,
    paddingBottom: theme.spacing(5),
    color: '#524C61',
  },
  heading: {
    fontFamily: 'Nerko One',
    color: '#698399',
    paddingBottom: 5,
  },
  navBar: {
    marginLeft: theme.spacing(3),
    marginBottom: theme.spacing(0),
  },
  piggy: {
    paddingBottom: 0,
    marginBottom: 0,
    marginBottom: theme.spacing(0),
  },
}));

const ChildAppBar = (props) => {
  const { history } = props;
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleHome = (pageURL) => {
    history.push(pageURL);
  };

  const handleLog = (pageURL) => {
    props.dispatch({ type: 'LOGOUT' });
    history.push(pageURL);
  };

  const handleMenu1 = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = (pageURL) => {
    history.push(pageURL);
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar positionSticky>
        <Toolbar className={classes.toolbar}>
          <IconButton
            className="home"
            aria-label="account of current user"
            edge="start"
            aria-haspopup="true"
            onClick={() => handleMenuClick('/child/welcome')}
            color="secondary"
          >
            <img
              src="https://primebucket2020.s3.us-east-2.amazonaws.com/54ebcd62-6c5d-42dc-b301-4dce9540c91b_202-stay-home-7.svg"
              className="navBar"
            ></img>
          </IconButton>
          <Box className={classes.title}>
            <IconButton>
              <BankModal />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              open={open}
              onClose={() => handleMenuClick(null)}
            >
              <MenuItem onClick={() => handleMenuClick()}>
                <img
                  src="https://primebucket2020.s3.us-east-2.amazonaws.com/5d3f4d7c-a544-4190-a9cb-93f5798f2197_141-list.svg"
                  className="navBar1"
                ></img>
              </MenuItem>
            </Menu>
            <Typography
              className={classes.heading}
              variant="h4"
              style={{
                fontFamily: 'Nerko one',
                color: '#698399',
              }}
              noWrap
            >
              ...GROWING UP
            </Typography>
          </Box>
          <IconButton
            className={classes.navBar}
            aria-label="display more actions"
            onClick={handleMenu}
            edge="center"
            color="secondary"
          >
            <img
              src="https://primebucket2020.s3.us-east-2.amazonaws.com/d16f507d-d25c-446f-8328-0982b88e3a98_183-doughnut-7.svg"
              className="navBar"
            ></img>
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            open={open}
            onClose={() => handleMenuClick(null)}
          >
            <MenuItem onClick={() => handleMenuClick('/child/chores')}>
              <img
                src="https://primebucket2020.s3.us-east-2.amazonaws.com/45d41b9e-7a26-45eb-ae03-bc4f2cef6e25_186-list-1.svg"
                className="navBar1"
              ></img>
            </MenuItem>
            <MenuItem onClick={() => handleMenuClick('/child/rewards')}>
              <img
                src="https://primebucket2020.s3.us-east-2.amazonaws.com/ee8b88d0-7812-49f4-9032-c66fb706e831_200-gift-3.svg"
                className="navBar1"
              ></img>
            </MenuItem>
            <MenuItem onClick={() => handleLog('goodbye')}>
              {' '}
              <img
                src="https://primebucket2020.s3.us-east-2.amazonaws.com/d08e29f3-645b-4448-b7b7-a59ad9e6df90_188-bye-2.svg"
                className="navBar1"
              ></img>
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
};

const mapStoreToProps = (store) => ({
  store,
});

export default connect(mapStoreToProps)(withRouter(ChildAppBar));
