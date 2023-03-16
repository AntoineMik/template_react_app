import React from 'react';
import { IconButton, Container } from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import MobileModal from './MobileModal';

const MobileNavbar = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (

        <Container
            sx={{ 
                display: 'flex',
                justifyContent:'flex-end',
                alignContent: "center",
            }}
        >
            <IconButton aria-label="cart" color='secondary' size='medium'
                onClick={handleOpen}
            >
                <MenuRoundedIcon fontSize='large'/>
            </IconButton>
            <MobileModal
                open={open} 
                handleOpen={handleOpen} 
                handleClose={handleClose}
            />
        </Container>
    )
}

export default MobileNavbar