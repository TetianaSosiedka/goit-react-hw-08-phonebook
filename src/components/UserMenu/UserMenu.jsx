import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import { UserBlock } from './UserMenu.styled';

import avatar from '../../img/avatar.png';

import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const UserMenu = () => {
  const { token, email } = useSelector(state => state.user);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      {token ? (
        <>
          <UserBlock onClick={handleClick}>
            <p>{email}</p>
            <Avatar
              alt="avatar"
              src={avatar}
              sx={{
                width: [30],
                height: [30],
              }}
            />
          </UserBlock>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={handleClose}>
              <Link to="./logout">Logout</Link>
            </MenuItem>
          </Menu>
        </>
      ) : (
        <>
          <UserBlock onClick={handleClick}>
            <Avatar
              sx={{
                width: [30],
                height: [30],
              }}
            />
          </UserBlock>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={handleClose}>
              <Link to="./register">Registration</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link to="./login">Login</Link>
            </MenuItem>
          </Menu>
        </>
      )}
    </>
  );
};
export default UserMenu;
