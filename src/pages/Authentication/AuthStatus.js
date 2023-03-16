
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';
import { Box, Typography, Grid } from "@mui/material";
import { MotionAvatar, MotionIconButton} from '../../utils/motionMui';
import userLogo from '../../assets/images/icons/21-avatar.svg';

function AuthStatus() {
    const auth = useAuth();
    const navigate = useNavigate();
  
    if (!auth.user) {
      return (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Grid 
            container
            maxWidth="md"
            sx={{
              display: 'flex',
              flexFlow: 'column nowrap',
              alignContent: 'center',
              justifyContent: 'space-between',
              alignItems: "center",
            }}
            >
              <MotionIconButton 
                whileHover={{ scale: 1.1 }} 
                whileTap={{ scale: 0.9 }}
                aria-label="logout" 
                size="medium"
                color="google"
                sx={{
                  size: { md:'small' },
                  "&:hover": { color: 'var(--secondary)'},
                  display: 'flex',
                  border:'Solid 1px',
                  borderRadius: '50%',
                  alignItems: "center",
                }}
                component={Link}
                to = {"/profile"}
              >
                <lord-icon
                    src="https://cdn.lordicon.com/dqxvvqzi.json"
                    trigger="hover"
                    colors="outline:#121331,primary:#f1c40f,secondary:#7cc5fe"
                    state="hover-looking-around"
                    style={{
                      width:"2rem", height:"2rem", display: 'flex',
                    }}
                />
                
              </MotionIconButton>
              <Typography
                fontSize='.7rem'
                sx={{
                  display: { xl: 'flex', md: 'flex', xs: 'none'}
                }}
              >
                You are not logged in
              </Typography>
            </Grid>
          </Box>
      )
    }
  
    return (
      <Box>
        <Grid 
          container
          maxWidth="md"
          sx={{
            display: 'flex',
            flexFlow: 'row nowrap',
            alignContent: 'center',
            justifyContent: 'space-between',
            alignItems: "center",
          }}
        >
          <Grid item
            sx={{
              mr: '1rem'
            }}
          >
            <MotionAvatar 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1, }}
              transition={{ ease: "easeOut", duration: 0.5 }}
              whileTap={{scale:0.6}}
              alt="user_icon"
              src={auth.user.photoURL ? auth.user.photoURL : userLogo} 
              component={Link}
              to={"/profile"}
              sx={{
                border: 'solid 1px',
                width: '3rem',
                height: '3rem',
                "&:hover": { color: 'var(--secondary)'},
              }}
            />
          </Grid>
          <Grid item>
            <MotionIconButton 
              whileHover={{ scale: 1.1 }} 
              whileTap={{ scale: 0.9 }}
              aria-label="logout" 
              size="large"
              color="google"
              sx={{
                size: { md:'large' },
                "&:hover": { color: 'var(--secondary)'},
                display: 'flex',
                flexFlow: 'column nowrap',
              }}
              onClick={() => {
                auth.signOut(() => navigate("/"))
              }}
            >
              <ExitToAppRoundedIcon 
                fontSize='large'
                sx={{
                  border: 'solid 1px',
                  borderRadius: '50%',
                  p: '2px'
                }}
              />
            </MotionIconButton>
          </Grid>
        </Grid>
      </Box>
    )
}

export default AuthStatus