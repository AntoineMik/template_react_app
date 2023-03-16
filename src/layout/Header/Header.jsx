import { AppBar, Container, Grid, IconButton, Button, Avatar } from '@mui/material';
import React from 'react';
import NavBar from '../../components/navbar/Navbar';
import Logo from '../../components/logo/Logo';
import Cart from '../../components/cart/Cart'
import UserAvatar from '../../components/avatar/UserAvatar';
import GlobalSearch from '../../components/search/GlobalSearch';

const Header = () => {
  return (
    <AppBar
        elevation={0}
        position="sticky"
        sx={{
            color: 'google.main',
            bgcolor: '#fff',
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
                display={{lg:'flex', md:'flex', xs:'none', sm:'none'}}
                alignItems={'center'}
                ml={10}
            >
                <GlobalSearch/>
            </Grid>
            <Grid item
                flexGrow={1}
            >
                <NavBar/>
            </Grid>
            <Grid item
                display={'flex'}
                alignItems={'center'}
                mx={2}
            >
                <UserAvatar/>
            </Grid>
            <Grid
                display={'flex'}
                alignItems={'center'}
            >
                <Cart />
            </Grid>
        </Grid>

    </AppBar>
  )
}

export default Header