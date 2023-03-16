import { Button, Typography, Container } from '@mui/material'
import React from 'react'

const Policies = () => {
  return (
    <Container>
        <Typography variant='subtitle1'
            sx={{
                color:"primary.dark",
                textDecoration: "underline",
                mb: '1rem',
            }}
        >
            Terms, Conditions & Policies
        </Typography>
        <Container
            sx={{
                display: 'flex',
                flexDirection: {md: 'column', xs: 'row', sm:'row'},
                justifyContent: {md: 'center', xs:'space-evenly'},
                alignItems: 'center',
            }}
        >
            <Button
                sx={{
                    color: 'secondary.dark'
                }}
            >
                Terms & Conditions
            </Button>
            <Button
                sx={{
                    color: 'secondary.dark'
                }}
            >
                Privacy Policy
            </Button>
            <Button
                sx={{
                    color: 'secondary.dark'
                }}
            >
                Return Policy
            </Button>
        </Container>
    </Container>
  )
}

export default Policies