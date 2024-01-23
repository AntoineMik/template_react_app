import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

export default function Copyright(props) {
    return (
      <Typography variant="body2" color="primary.main" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" to="/">
          Template App
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }