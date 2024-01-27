import { AppBar, Grid } from '@mui/material';
import React from 'react';
import NavBar from '../../components/navbar/Navbar';
import Logo from '../../components/logo/Logo';

const Header = () => {
  return (
    <AppBar
        elevation={0}
        position="sticky"
        sx={{
            color: 'google.main',
            bgcolor: 'var(--background)',
            opacity: 1,
            borderRadius: '',
            fontSize: '.8rem',
            display: "flex",
        }}
    >
        <Grid
            container
            display={'flex'}
            flexDirection={'row'}
        >
            <Grid item>
                <Logo/>
            </Grid>
            <Grid item
                flexGrow={1}
            >
                <NavBar/>
            </Grid>
        </Grid>

    </AppBar>
  )
}

export default Header