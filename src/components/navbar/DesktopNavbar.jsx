import React from 'react';
import { NavLink } from "react-router-dom";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Container, Typography } from "@mui/material";

function LinkTab(props) {
    return (
        <Typography
            component={NavLink} 
            to={props.to}
            variant='h6'
            sx={{
                textDecoration: "none",
                padding: ".5rem",
                margin: "1.5rem",
                fontWeight: 400,

            }}
            style={({ isActive }) => ({ 
                color: isActive ? 'var(--secondary)' : 'var(--text_dark)'
            })}
        >{props.label}</Typography>
    );
}

const DesktopNavbar = () => {

    const handleChange = (event, newValue) => {
        event.preventDefault();
        setValue(newValue);
    };

    return (
        <Container
            sx={{ 
                display: 'flex',
                width: '100%',
                height: '100%',
                justifyContent:'flex-end',
                alignContent: "center",
            }}
        >
            <Tabs
                value={0} 
                onChange={handleChange} 
                indicatorColor="none"
                role="navigation"
                aria-label="navigation tabs"
                TabIndicatorProps={{
                    style: { display: 'none' }
                }}
                sx={{
                    textColor:"var(--text_dark)",
                    alignItems: 'center',
                }}
            >
                <LinkTab label="Home" to="/" 
                />
                <LinkTab label="Services" to="/Services" 
                />
                <LinkTab label="Work Gallery" to="/Gallery" 
                />
                <LinkTab label="About Us" to="/About" 
                />
            </Tabs>
        </Container>
    )
}

export default DesktopNavbar