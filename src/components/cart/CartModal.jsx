import { Container, Modal, Typography, Paper, Grid, IconButton, Button } from '@mui/material';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import React from 'react';
import cartImage from '../../assets/images/basket-trolley-shopping-card.svg';
import { MotionGrid } from '../../utils/motionMui';
import { NavLink } from 'react-router-dom';

const CartModal = (props) => {
  return (
    
    <Modal
        id="Cart-modal"
        open={props.open}
        onClose={props.handleClose}  
        sx={{
            alignItems: 'flex-end'
        }}    
    >
        <MotionGrid
            sx={{
                height:'100vh',
                width: { md:'40vw', lg:'30vw', sm:'50vw', xs: '100vw'},
                maxHeight:'100vh',
                position: 'absolute',
                right: 0,
                p: 0,
                maxWidth:{ md:'50vw', lg:'30vw', sm:'50vw', xs: '100vw'}
            }}
            initial={{ opacity:0 }}
            animate={{ opacity:1, duration: 0.3}}
        >
            <Paper
                sx={{
                    height:'100%',
                    width: '100%',
                    display:'flex',
                    flexFlow: 'column nowrap',
                }}
            >
                <IconButton 
                    size='large'
                    color='primary'
                    sx={{
                        m: '.5rem',
                        alignSelf:'flex-end',
                        maxWidth:'2.5rem',
                        maxHeight:'2.5rem',
                        opacity: 1,
                    }}
                    onClick={props.handleClose}
                >
                    <CloseRoundedIcon fontSize='large'/>
                </IconButton>
                {
                    props.cartItems.length > 0 ?
                    <></> : 
                    <Container
                        sx={{
                            my:'2rem',
                            height: '100%',
                            backgroundImage: `url(${cartImage})`, /* The image used */
                            backgroundColor: 'rgba(255, 255, 255, 0.2)', /* Used if the image is unavailable */
                            backgroundPosition: 'center', /* Center the image */
                            backgroundRepeat: 'no-repeat', /* Do not repeat the image */
                            backgroundSize: 'fit', /* Resize the background image to cover the entire container */
                        }}
                    >
                        <Typography variant="h5" >Your cart is empty !!!</Typography>
                        <Typography variant="subtitle1"
                        >
                            Checkout 
                            <Button
                                component={NavLink}
                                to={'/boutique'}
                                onClick={props.handleClose}
                            >our prints
                            </Button> 
                            and get yourself a little something 😄!
                        </Typography>
                    </Container>
                }
                
            </Paper>
        </MotionGrid>
    </Modal>
  )
}

export default CartModal