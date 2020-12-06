import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import HomeIcon from '@material-ui/icons/Home';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: {
    minHeight: 128,
    alignItems: 'flex-end',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
    color: '#524C61',
  },
  title: {
    flexGrow: 1,
    alignSelf: 'flex-end',
    paddingBottom: theme.spacing(5),
    fontFamily: 'Nerko One',
    color: '#698399',
  },
}));

const AdminAppBar = (props) => {
  const { history } = props;
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleHome = (pageURL) => {
    history.push(pageURL);
  };

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLog = (pageURL) => {
    props.dispatch({ type: 'LOGOUT' });
    history.push(pageURL);
  };

  const handleMenuClick = (pageURL) => {
    history.push(pageURL);
    setAnchorEl(null);
  };

  return (
    <div className="adminFixed">
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar className={classes.toolbar}>
            <IconButton
              className="home"
              aria-label="account of current user"
              edge="start"
              aria-haspopup="true"
              onClick={() => handleMenuClick('/user')}
              color="inherit"
            >
              <HomeIcon />
            </IconButton>
            <Typography className={classes.title} variant="h4" nowrap>
              ...Growing Up
            </Typography>
            <IconButton
              aria-label="display more actions"
              onClick={handleMenu}
              edge="end"
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={() => handleMenuClick(null)}
            >
              <MenuItem onClick={() => handleMenuClick('/admin/rewards')}>
                Rewards
              </MenuItem>
              <MenuItem onClick={() => handleMenuClick('/admin/chores')}>
                Chores
              </MenuItem>
              <MenuItem onClick={() => handleMenuClick('/admin/assign')}>
                Assign
              </MenuItem>
              <MenuItem onClick={() => handleMenuClick('/admin/emotions')}>
                Emotions
              </MenuItem>

              <MenuItem onClick={() => handleLog('/user')}>LogOut</MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
      </div>
    </div>
  );
};

const mapStoreToProps = (store) => ({
  store,
});

export default connect(mapStoreToProps)(withRouter(AdminAppBar));
