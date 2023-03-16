import { Container, Grid } from '@mui/material';
import React from 'react';
import { Outlet } from "react-router-dom";
import Footer from './Footer/Footer';
import Header from './Header/Header';

const Layout = () => {
  return (
    <Grid
        container
        className='layout'
        maxWidth='100vw'
        minHeight={'100vh'}
        display='flex'
        flexDirection={'column'}
    >
        <Header />
        <Container
            className='body'
            sx={{
                display: 'flex',
                flexGrow: 1,
                alignItems: 'center',
            }}
        >
            <Outlet />
        </Container>
        <Footer />

    </Grid>
    
    
  )
}

export default Layout