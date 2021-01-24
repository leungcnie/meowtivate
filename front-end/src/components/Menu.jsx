import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import { Link } from 'react-router-dom';

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <MenuRoundedIcon/>
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} component={Link} to="/dashboard">
            My DashBoard
        </MenuItem>
        <MenuItem onClick={handleClose} component={Link} to="/account">
            My Account
        </MenuItem>
        <MenuItem onClick={handleClose} component={Link} to="/cats" >
            My Collection
        </MenuItem>
        <MenuItem onClick={handleClose} component={Link} to="/lists">
            My Lists
        </MenuItem>
        <MenuItem onClick={handleClose} component={Link} to="/inventory">
            My Inventory
        </MenuItem>
        <MenuItem onClick={handleClose} component={Link} to="/shop">
            Shop
        </MenuItem>
        <MenuItem onClick={handleClose} component={Link} to="/">
            Logout
        </MenuItem>
      </Menu>
    </div>
  );
}