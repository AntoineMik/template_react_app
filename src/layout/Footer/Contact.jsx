import { IconButton } from '@mui/material';
import { Button, Typography, Container } from '@mui/material';
import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';

const Contact = () => {
  return (
    <Container
        sx={{
            display:'flex',
            flexDirection: 'column',
            alignItems:'center',
        }}
    >
        <Typography variant='subtitle1'
            sx={{
                color:"primary.dark",
                textDecoration: "underline",
            }}
        >
            Contact Us
        </Typography>
        <Container
            sx={{
                display: 'flex',
                flexDirection: {md: 'column', xs: 'row', sm:'row'},
                justifyContent: {md: 'center', xs:'space-evenly'},
                alignItems: 'center',
            }}
        >
            <IconButton color='google' size='medium'
                sx={{
                    width:'2.2rem',
                    height: '2.2rem',
                }}
            >
                <EmailIcon fontSize='medium'/>
            </IconButton>
            <IconButton color='google' size='medium'
                sx={{
                    width:'2.2rem',
                    height: '2.2rem',
                    m: '.3rem'
                }}
            >
                <PermPhoneMsgIcon fontSize='medium'/>
            </IconButton>
            <IconButton color='google' size='medium'
                sx={{
                    width:'2.2rem',
                    height: '2.2rem',
                }}
            >
                <InstagramIcon fontSize='medium'/>
            </IconButton>
        </Container>
    </Container>
  )
}

export default Contact