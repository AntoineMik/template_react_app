import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import Paper from '@mui/material/Paper';
import { Container, TextField, Grid, IconButton } from '@mui/material';
import { MotionContainer } from '../../utils/motionMui';

const SearchModal = (props) => {
  return (

    <div>
        <Modal
            open={props.open}
            onClose={props.handleClose}
            aria-labelledby="search-modal"
            aria-describedby="search-modal-search-site"
        >
            <MotionContainer
                sx={{
                    height:'100vh',
                    maxHeight:'100vh',
                }}
                initial={{ opacity:0 }}
                animate={{ opacity:1, duration: 0.3}}
            >
                <Paper
                    sx={{
                        height:'100%',
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
                        }}
                        onClick={props.handleClose}
                    >
                        <CloseRoundedIcon fontSize='large'/>
                    </IconButton>
                    <Grid
                        sx={{
                            mt: '1rem',
                            mx: '2rem',
                        }}
                    >
                        <Grid item
                        >
                            <TextField 
                                id="search-field" 
                                fullWidth
                                autoFocus
                                label="Search" 
                                variant="standard" 
                            />
                        </Grid>
                    </Grid>
                </Paper>
            </MotionContainer>
        </Modal>
    </div>
  )
}

export default SearchModal