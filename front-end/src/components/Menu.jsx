import React from 'react';
import clsx from 'clsx';
import { makeStyles } from "@material-ui/core/styles";
import { Drawer, List, Divider, ListItem, IconButton } from '@material-ui/core';
import { MenuRounded, HomeRounded, AppsRounded, FormatListBulletedRounded, StorefrontRounded, AccountBoxRounded, SubdirectoryArrowLeftRounded, SpaRounded } from '@material-ui/icons';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  menuItem: {
    fontFamily: 'Varela Round',
    color: 'dimgrey',
    paddingTop: '0.5em',
    fontSize: '1.2em'
  },
  menuIcon: {
    fontSize: "2em",
    color: '#fcd0c5',
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
}));

export default function SimpleMenu() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  
  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem className={classes.menuItem} component={Link} to="/dashboard">
          <HomeRounded style={{paddingRight: '0.25em'}}/>
            My DashBoard
        </ListItem>
        <ListItem className={classes.menuItem} component={Link} to="/account">
          <AccountBoxRounded style={{paddingRight: '0.25em'}}/>
            My Account
        </ListItem>
        <ListItem className={classes.menuItem} component={Link} to="/cats" >
          <AppsRounded style={{paddingRight: '0.25em'}}/>
            My Collection
        </ListItem>
        <ListItem className={classes.menuItem} component={Link} to="/lists">
          <FormatListBulletedRounded style={{paddingRight: '0.25em'}}/>
            My Lists
        </ListItem>
        <ListItem className={classes.menuItem} component={Link} to="/inventory">
          <SpaRounded style={{paddingRight: '0.25em'}}/>
            My Inventory
        </ListItem>
        <Divider style={{margin: '0.5em'}}/>
        <ListItem className={classes.menuItem} component={Link} to="/shop">
          <StorefrontRounded style={{paddingRight: '0.25em'}}/>
            Shop
        </ListItem>
        <ListItem className={classes.menuItem} component={Link} to="/">
          <SubdirectoryArrowLeftRounded style={{paddingRight: '0.25em'}}/>
            Logout
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton onClick={toggleDrawer(anchor, true)}>
            <MenuRounded className={classes.menuIcon}/>
          </IconButton>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );

  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  // return (

    // <div>
    //   <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
    //     <MenuRoundedIcon className={classes.menuIcon}/>
    //   </Button>
    //   <Menu
    //     id="simple-menu"
    //     anchorEl={anchorEl}
    //     keepMounted
    //     open={Boolean(anchorEl)}
    //     onClose={handleClose}
    //   >
    //     <MenuItem className={classes.menuItem} component={Link} to="/dashboard">
    //         My DashBoard
    //     </MenuItem>
    //     <MenuItem className={classes.menuItem} component={Link} to="/account">
    //         My Account
    //     </MenuItem>
    //     <MenuItem className={classes.menuItem} component={Link} to="/cats" >
    //         My Collection
    //     </MenuItem>
    //     <MenuItem className={classes.menuItem}  component={Link} to="/lists">
    //         My Lists
    //     </MenuItem>
    //     <MenuItem className={classes.menuItem} component={Link} to="/inventory">
    //         My Inventory
    //     </MenuItem>
    //     <MenuItem className={classes.menuItem} component={Link} to="/shop">
    //         Shop
    //     </MenuItem>
    //     <MenuItem className={classes.menuItem} component={Link} to="/">
    //         Logout
    //     </MenuItem>
    //   </Menu>
    // </div>
  // );
}