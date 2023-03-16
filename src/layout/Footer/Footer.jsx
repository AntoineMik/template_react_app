import { Grid, Container } from '@mui/material'
import React from 'react'
import About from './About'
import Contact from './Contact'
import Policies from './Policies'
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
          <About/>
        </Grid>
        <Grid item xs={4} sm={9} md={4}>
          <Policies/>
        </Grid>
        <Grid item xs={4} sm={9} md={2}>
          <Contact/>
        </Grid>
      </Grid>
      <Copyright/>
    </Container>
  )
}

export default Footer