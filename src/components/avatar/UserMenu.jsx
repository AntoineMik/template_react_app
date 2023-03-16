import React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import LocalMallRoundedIcon from '@mui/icons-material/LocalMallRounded';
import ManageAccountsRoundedIcon from '@mui/icons-material/ManageAccountsRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { NavLink } from 'react-router-dom';

const UserMenu = (props) => {
  return (
    <Menu
        anchorEl={props.anchorEl}
        id="account-menu"
        open={props.open}
        onClose={props.handleClose}
        onClick={props.handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={props.handleClose}
          component={NavLink}
          to={'/profile'}
        >
          <ListItemIcon>
            <PersonRoundedIcon color='success' /> 
          </ListItemIcon>
          Profile
        </MenuItem>
        <MenuItem onClick={props.handleClose}
          component={NavLink}
          to={'/account'}
        >
          <ListItemIcon>
            <ManageAccountsRoundedIcon color='error'/> 
          </ListItemIcon>
          My account
        </MenuItem>
        <MenuItem onClick={props.handleClose}
          component={NavLink}
          to={'/orders'}
        >
          <ListItemIcon>
            <LocalMallRoundedIcon color='primary'/> 
          </ListItemIcon>
          My orders
        </MenuItem>
        <Divider />
        <MenuItem onClick={props.handleClose}
          component={NavLink}
          to={'/settings'}
        >
          <ListItemIcon>
            <Settings fontSize="small"/>
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={props.handleLogout}>
          <ListItemIcon>
            <Logout fontSize="small" color='secondary'/>
          </ListItemIcon>
          Logout
        </MenuItem>
    </Menu>
  )
}

export default UserMenu