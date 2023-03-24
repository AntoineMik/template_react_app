import React from "react";
import { NavLink } from "react-router-dom";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Container, Grid, Paper, Modal, IconButton } from "@mui/material";
import { MotionGrid } from "../../utils/motionMui";

function LinkTab(props) {
    return (
        <Tab
            onClick={props.handleClose}
            label={props.label}
            component={NavLink} 
            to={props.to}
            style={({ isActive }) => ({ 
                color: isActive ? 'var(--secondary)' : 'var(--google_blue)',
            })}
            sx={{
                m:'2rem',
                alignSelf:'center',
            }}
        />
    );
}

const MobileModal = (props) => {

    const handleChange = (event, newValue) => {
        event.preventDefault();
        setValue(newValue);
    };
      
      const item = {
        hidden: { opacity: 0 },
        show: { opacity: 1 }
      }

      const container = {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.2
          }
        }
      }

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
            initial={{ opacity:0 }}
            animate={{ opacity:1, duration: 0.3}}
            sx={{
                height:'100vh',
                width: { md:'40vw', lg:'30vw', sm:'50vw', xs: '100vw'},
                maxHeight:'100vh',
                position: 'absolute',
                right: 0,
                p: 0,
                maxWidth:{ md:'50vw', lg:'30vw', sm:'50vw', xs: '100vw'}
            }}
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
                    }}
                    onClick={props.handleClose}
                >
                    <CloseRoundedIcon fontSize='large'/>
                </IconButton>
                <Container
                    sx={{ 
                        display: 'flex',
                        flexDirection: 'column',
                        width: '100%',
                        height: '100%',
                        alignItems:'center',
                        mt:'0rem',
                    }}
                >
                    <Tabs
                        value={0} 
                        onChange={handleChange} 
                        indicatorColor="secondary"
                        aria-label="navigation tabs"
                        orientation="vertical"
                        TabIndicatorProps={{
                            style: { display: 'none' }
                        }}
                        sx={{
                            textColor:"google.main",
                            alignItems: 'center',
                            width:'100%',
                        }}
                    >
                        <LinkTab label="Services" to="/Services" handleClose={props.handleClose} item={item}/>
                        <LinkTab label="About Us" to="/About" handleClose={props.handleClose} item={item}/>
                        <LinkTab label="Contact Us" to="/Contact" handleClose={props.handleClose} item={item}/>
                    </Tabs>
                </Container>
            </Paper>
        </MotionGrid>
    </Modal>
  )
}

export default MobileModal