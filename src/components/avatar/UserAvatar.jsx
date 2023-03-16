import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import LocalMallRoundedIcon from '@mui/icons-material/LocalMallRounded';
import ManageAccountsRoundedIcon from '@mui/icons-material/ManageAccountsRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import { NavLink } from 'react-router-dom';
import UserMenu from './UserMenu';
import { useAuth } from '../../context/AuthContext';
import {MotionBox} from '../../utils/motionMui';
import RequireAuth from '../../pages/Authentication/RequireAuth';
import Authentication from '../../pages/Authentication/Authentication';

const UserAvatar = () => {

  const authenticate = useAuth();
  const navigate = useNavigate();
  // const location = useLocation();
  // const from = (location.state?.from?.pathname || "/");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    authenticate.signOut(() => navigate("/"))
  };

  return (
    <MotionBox sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeOut", duration: 1 }}
    >
      {
        authenticate && authenticate.user ? 
        <>
          <Tooltip title="Account settings">
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={open ? 'account-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
            >
              <Avatar
                srcSet={authenticate.user.photoURL}
                src={authenticate.user.photoURL}
                sx={{ 
                    width: 30, 
                    height: 30, 
                }}
                  
              />
            </IconButton>
          </Tooltip>
          <UserMenu 
            anchorEl={anchorEl} 
            open={open} 
            handleClick={handleClick} 
            handleClose={handleClose} 
            handleLogout={handleLogout}
          />
        </>
        :
        <>
          <Tooltip title="Login">
            <IconButton
              size="small"
              sx={{ ml: 2 }}
              // aria-controls={open ? 'account-menu' : undefined}
              // aria-haspopup="true"
              // aria-expanded={open ? 'true' : undefined}
              component={NavLink}
              to={'/authenticate'}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: "easeOut", duration: 1 }}
            >
              <Avatar
                  src=""
                  sx={{ 
                      width: 30, 
                      height: 30, 
                  }}
              />
            </IconButton>
          </Tooltip>
        </>
      }
    </MotionBox>
    
  )
}

export default UserAvatar