import { Box, Button} from '@mui/material';
import Menu from '@mui/material/Menu';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import SearchModal from './SearchModal';

const GlobalSearch = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

  return (
    <div>
        <Box>
            <Button 
                onClick={handleOpen}
                variant="outlined" 
                startIcon={<SearchSharpIcon/>}
                color='primary'
                size='small'
                aria-label='search-button' 
                aria-controls={open ? 'search-container' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
            >
                Search
            </Button>
        </Box>
        <SearchModal open={open} handleClose={handleClose} />
    </div>
  )
}

export default GlobalSearch