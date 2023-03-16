import { createTheme, responsiveFontSizes } from '@mui/material/styles';

export const theme = responsiveFontSizes( 
    createTheme({
        palette: {
            primary: {
                main: '#7cc5fe',
                light:'#cbe6ff',
                lighter: '#cde5ff',
                dark: '#003450',
                subtle: '#90cdff',
                darker: '#001d31'
            },
            secondary: {
                main: '#f1c40f',
                light: '#ffe084',
                dark: '#735c00',
            },
            success: {
                main: '#00a651',
                dark: '#006d33',
                light: '#78fc9c',
                darker: '#003917'
            },
            error: {
                main: '#E76F51',
            },
            google: {
                main: '#4285F4',
                red: '#de5246',
                yellow: '#F4B400'
            },
            background: {
                main: 'rgba(255, 255, 255, 0.1)',
                dark: '#001f25'
            }
        },
        typography: {
            fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Poppins',
            '"Helvetica Neue"',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
            ].join(','),
            fontSize: 12,
        },
    })
);