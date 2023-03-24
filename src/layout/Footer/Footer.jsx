import { Grid, Container } from '@mui/material'
import React from 'react'
import Copyright from '../../components/Copyright/Copyright'

const Footer = () => {
  return (
    <Container>
      <Grid container 
        spacing={{ xs: 4, sm: 4, md: 3 }} 
        columns={{ xs: 4, sm: 9, md: 12 }}
        sx={{
          mb: '1rem',
        }}
      >
        <Grid item xs={4} sm={9} md={6}>
          
        </Grid>
        <Grid item xs={4} sm={9} md={4}>
          
        </Grid>
        <Grid item xs={4} sm={9} md={2}>
          
        </Grid>
      </Grid>
      <Copyright/>
    </Container>
  )
}

export default Footer