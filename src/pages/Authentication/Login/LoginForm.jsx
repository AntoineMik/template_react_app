import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { MotionBox } from '../../../utils/motionMui';


const LoginForm = (from) => {

  const navigate = useNavigate();
  const auth = useAuth();

  const emailRef = useRef();
  const passwordRef = useRef();

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    const credentials = {
      email: emailRef.current.value, 
      password: passwordRef.current.value
    }
    
    auth.signIn(credentials, () => {
      navigate(from, { replace: true })
    })
  }

  return (
    <MotionBox
      sx={{
        my: 0,
        mb: 0 ,
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
        Sign in
      </Typography>
      <Box 
        component="form" 
        onSubmit={(e) => handleSignIn(e)}
        sx={{ mt: 3,}}
      >
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
          sx={{mt: 1, backgroundColor: (t) => t.palette.mode === 'light' ? 
            t.palette.background.main : 
            t.palette.background.dark
          }}
          inputRef={emailRef}
        />
        <FormControl 
          fullWidth 
          required 
          color='google'
          sx={{mt: 1, backgroundColor: (t) => t.palette.mode === 'light' ? 
            t.palette.background.main : 
            t.palette.background.dark
          }}
          variant="outlined"
        >
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
            required
            inputRef={passwordRef}
          />
        </FormControl>
        <Button
          disableElevation
          type="submit"
          fullWidth
          variant="contained"
          size='large'
          color='secondary'
          startIcon={<LockOpenIcon />}
          sx={{ mt: 3, mb: 2, }}
        >
          Sign In
        </Button>
        <Grid container>
          <Grid item xs>
            <Link 
              href="#" 
              variant="body2" 
              sx={{ 
                color: (t) => t.palette.mode === 'light' ? 
                t.palette.success.dark : 
                t.palette.success.main
                }} 
            >
              Forgot password?
            </Link>
          </Grid>
        </Grid>
      </Box>
    </MotionBox>
  )
}

export default LoginForm