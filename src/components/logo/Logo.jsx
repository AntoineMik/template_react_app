import React from 'react'
import { NavLink } from 'react-router-dom';
import MavLogo from '../../assets/images/logo.svg';
import { MotionIconButton } from '../../utils/motionMui';
import { Box } from '@mui/material';

const Logo = () => {
  return (
    <MotionIconButton 
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1, }}
      transition={{ ease: "easeOut", duration: 0.5 }}
      component={NavLink}
      color='primary'
      to={"/"}
      sx={{
        border: 'solid 1px',
      }}
    >
      <Box
        component='img'
        src={MavLogo}
        alt="mavcollections logo"
        sx={{
          width: "35px", 
          height: "35px",
          maxWidth: {md: '25px', xs: '25px', lg: '35px', xl: '35px'},
          maxHeight: {md: '25px', xs: '25px', lg: '35px', xl: '35px'},
        }}
      />
    </MotionIconButton>
  )
}

export default Logo