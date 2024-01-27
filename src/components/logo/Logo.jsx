import React from 'react'
import { NavLink } from 'react-router-dom';
import TempLogo from '../../assets/images/logo.svg';
import { MotionIconButton } from '../../utils/motionMui';
import { Box, Paper } from '@mui/material';

const Logo = () => {
  return (
    <Paper 
      elevation={0}
      component={NavLink}
      to={"/"}
      sx={{
        display: "flex",
        paddingLeft: "2rem",
        bgcolor: "var(--background)",
      }}
    >
      <Box
        component='img'
        src={TempLogo}
        alt="template logo"
        sx={{
          width: "100px",
          height: "auto",
          maxWidth: {md: '100px', xs: '100px', lg: '100px', xl: '100px'},
        }}
      />
    </Paper>
  )
}

export default Logo