import { createTheme, responsiveFontSizes } from '@mui/material/styles';

export const theme = responsiveFontSizes( 
    createTheme({
        palette: {
            primary: {
                main: '#5056a9',
                light:'#bfc2ff',
                lighter: '#e0e0ff',
                darker: '#050764',
                subtle: '##383e8f',
                dark: '#202578'
            },
            secondary: {
                main: '#f1c048',
                light: '#785a00',
                dark: '#3f2e00',
                lighter: '#ffdf9c',
                darker: '#251a00',
                subtle: '#5b4300',
            },
            success: {
                main: '#176e00',
                dark: '#083900',
                light: '#68e047',
                darker: '#032100',
                lighter: '#84fd61',
                subtle: '#0f5300',
            },
            error: {
                main: '#ba1a1a',
                dark: '#083900',
                light: '#690005',
                darker: '#410002',
                lighter: '#ffdad6',
                subtle: '#93000a',
            },
            background: {
                main: '#fffbff',
                light: '#e4e1ec',
                dark: '#1b1b1f',
                subtle: '#e5e1e6',
                outline: '#918f9a',
            }
        },
        typography: {
            fontFamily: [
                'Inter', 'sans-serif'].join(','),
            fontSize: 12,
        },
    })
);