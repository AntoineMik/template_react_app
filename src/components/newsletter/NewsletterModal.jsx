import React from "react";
import { NavLink } from "react-router-dom";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import GlobalSearch from "../search/GlobalSearch";
import { Container, Grid, Paper, Modal, IconButton, Typography } from "@mui/material";
import { MotionGrid, MotionTab, MotionTabs } from "../../utils/motionMui";
import NewsletterForm from "./NewsletterForm";

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

const NewsletterModal = (props) => {

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
                width:'100vw',
                height: { md:'40vh', lg:'30vh', sm:'50vh', xs: '100vh'},
                maxHeight:'100vh',
                position: 'absolute',
                top: 0,
                p: 0,
                maxHeight:{ md:'50vh', lg:'30vh', sm:'50vh', xs: '100vh'}
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
                    <NewsletterForm/>
                </Container>
            </Paper>
        </MotionGrid>
    </Modal>
  )
}

export default NewsletterModal