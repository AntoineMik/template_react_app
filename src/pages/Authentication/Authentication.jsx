import { Container, IconButton } from '@mui/material';
import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate, useLocation, NavLink } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Button from '@mui/material/Button';
import ScopedCssBaseline from '@mui/material/ScopedCssBaseline';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import GoogleIcon from '@mui/icons-material/Google';
import ChevronLeftSharpIcon from '@mui/icons-material/ChevronLeftSharp';
import Typography from '@mui/material/Typography';
import { MotionGrid } from '../../utils/motionMui';
import LoginForm from './Login/LoginForm';
import SignupForm from './Signup/SignupForm';


const Authentication = () => {

    const navigate = useNavigate()
    const auth =  useAuth();

    
    const [hasAccount, setHasAccount] = useState(true);
    const location = useLocation();
    const from = (location.state?.from?.pathname || "/");
    const fromText = from.replace('/', '');


    const handleUseGoogle = (e) => {
        e.preventDefault();
        auth.useGoogle(() => {
            navigate(from, { replace: true })
        })
    }

    return (
        <MotionGrid 
            container 
            className='authentication'
            display={'flex'}
            flexGrow={1}
            flexDirection={'column'}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeOut", duration: 1 }}
        >
            <ScopedCssBaseline />
            <Container
                sx={{
                    display: 'flex',
                    alignItems:'flex-start'
                }}
            >
                <IconButton 
                    aria-label='back' 
                    size='large' 
                    color='primary'
                    component={NavLink}
                    to={from}
                >
                    <ChevronLeftSharpIcon fontSize='large'/>
                </IconButton>
            </Container>
            <Container
                maxWidth={'sm'}
                display={'flex'}
                sx={{
                    display:'flex',
                    flexFlow: 'column',
                    alignItems: 'center'
                }}
            >
                {
                    hasAccount ? 
                    <LoginForm from={from} />
                    :
                    <SignupForm from={from} />
                }
                <Box
                    display={'flex'}
                    flexDirection={'column'}
                    width={'100%'}
                    maxWidth={'sm'}
                >
                    <Container>
                        <Link 
                            href="#" 
                            onClick={() => setHasAccount((status) => !status)}
                            variant="body2" 
                            display='flex'
                            justifyContent='center'
                            sx={{ mt: 1, color: (t) => t.palette.mode === 'light' ? 
                                t.palette.success.dark : 
                                t.palette.success.main
                                }}
                            >
                            {hasAccount ? "Don't have an account? Sign Up" : "Already have an account? Sign in"}
                        </Link>
                    </Container>
                    
                    <Button
                        disableElevation
                        type="submit"
                        fullWidth
                        variant="outlined"
                        size='large'
                        color='google'
                        startIcon={<GoogleIcon />}
                        sx={{ mt: 5, mb: 2, }}
                        onClick={(e) => handleUseGoogle(e)}
                    >
                        Continue with Google
                    </Button>
                </Box>
            </Container>
            <Container>
                <Typography>
                    By signing up or signing in, you agree to our
                    <Button
                    component={NavLink}
                    to={''}
                    target='_blank'
                    sx={{
                        color: 'var(--text_color)'
                    }}
                    >
                    Terms of Use 
                    </Button>
                    and 
                    <Button
                    component={NavLink}
                    to={''}
                    target='_blank'
                    sx={{
                        color: 'var(--text_color)'
                    }}
                    >
                    Privacy Policy
                    </Button>
                </Typography>
            </Container>
        </MotionGrid>
    )
}

export default Authentication