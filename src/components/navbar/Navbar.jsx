import React from "react";
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