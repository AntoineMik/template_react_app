import React from "react";
import { NavLink } from "react-router-dom";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Container } from "@mui/material";
import { theme } from '../../utils/muiTheme';
import useMediaQuery from '@mui/material/useMediaQuery';
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

const NavBar = () => {
    const mobile = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <>
        {
            mobile ? <MobileNavbar/>  : <DesktopNavbar/>
        }
        </>
        
    )
}

export default NavBar