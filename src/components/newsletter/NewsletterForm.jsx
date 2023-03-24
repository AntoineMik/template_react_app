import React, { useRef, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import InputLabel from '@mui/material/InputLabel';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { MotionBox } from '../../utils/motionMui';
import { Container } from 'reactstrap';


const NewsletterForm = (from) => {

  const emailRef = useRef();
  const firstNameRef = useRef();
  const lastNameRef = useRef();


  const handleJoinUs = (e) => {
    e.preventDefault();
    const newUserInfo = {
      email: emailRef.current.value,
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
    }

    console.log(newUserInfo)
  }

  return (
    <MotionBox
      sx={{
        my: 0,
        mb: 1 ,
        mx: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeOut", duration: 1 }}
    >
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Join Us
      </Typography>
      <Typography variant='caption'>
        Get updates and promotions on new artworks and special discount offers.
      </Typography>
      <Box 
        component="form" 
        onSubmit={(e) => handleJoinUs(e)}
        sx={{
          marginTop: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              autoComplete="given-name"
              name="firstName"
              required
              fullWidth
              id="firstName"
              type="text"
              label="First Name"
              autoFocus
              color='google'
              sx={{ mt: 1, backgroundColor: (t) => t.palette.mode === 'light' ? 
                t.palette.background.main : 
                t.palette.background.dark
              }}
              inputRef={firstNameRef}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              id="lastName"
              type="text"
              label="Last Name"
              name="lastName"
              autoComplete="family-name"
              color='google'
              sx={{ mt: 1, backgroundColor: (t) => t.palette.mode === 'light' ? 
                t.palette.background.main : 
                t.palette.background.dark
              }}
              inputRef={lastNameRef}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              type="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              color='google'
              sx={{ mt: 1, backgroundColor: (t) => t.palette.mode === 'light' ? 
                t.palette.background.main : 
                t.palette.background.dark
              }}
              inputRef={emailRef}
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          disableElevation
          size='large'
          color='secondary'
          startIcon={<LockOpenIcon />}
          sx={{ mt: 3, mb: 2 }}
        >
          Join Us !
        </Button>
      </Box>
    </MotionBox>
  )
}

export default NewsletterForm