import React from 'react';
import { NavLink } from "react-router-dom";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Container } from "@mui/material";

function LinkTab(props) {
    return (
        <Tab
            label={props.label}
            component={NavLink} 
            to={props.to}
            style={({ isActive }) => ({ 
                color: isActive ? 'var(--secondary)' : 'var(--google_blue)',
            })}
        />
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
                indicatorColor="secondary"
                aria-label="navigation tabs"
                TabIndicatorProps={{
                    style: { display: 'none' }
                }}
                sx={{
                    textColor:"google.main",
                    alignItems: 'center'
                }}
            >
                <LinkTab label="Home" to="/" />
                <LinkTab label="Gallery" to="/gallery" />
                <LinkTab label="Boutique" to="/boutique" />
                <LinkTab label="Custom Order" to="/custom" />
            </Tabs>
        </Container>
    )
}

export default DesktopNavbar