import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import MuiToolbar from '@mui/material/Toolbar';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid2';
import { deepPurple } from '@mui/material/colors';
import { tabsClasses } from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import Link from '@mui/material/Link';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import { useNavigate } from 'react-router-dom';

const Toolbar = styled(MuiToolbar)({
  width: '100%',
  padding: '12px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  justifyContent: 'center',
  gap: '12px',
  flexShrink: 0,
  [`& ${tabsClasses.flexContainer}`]: {
    gap: '8px',
    p: '8px',
    pb: 0,
  },
});

export default function AppNavbarAba() {

  const navigate = useNavigate();

  return (
    <AppBar
      position="fixed"
      sx={{
        display: { xs: 'auto', md: 'none' },
        boxShadow: 0,
        bgcolor: 'background.paper',
        backgroundImage: "linear-gradient(0deg, rgba(0,32,59,1) 0%, rgba(30,0,140,1) 100%)",
        borderBottom: '1px solid',
        borderColor: 'divider',
        top: 'var(--template-frame-height, 0px)',
      }}
    >
      <Toolbar variant="regular">
        <Stack
          direction="row"
          sx={{
            justifyContent: 'space-between',
            alignItems: 'center',
            flexGrow: 1,
            width: '100%',
          }}
        >
          <Stack direction="row" spacing={1} sx={{ justifyContent: 'center' }}>
            <Grid container spacing={2}>
              <Grid size={10}>
                <Typography 
                  variant="h4" 
                  component="h1" 
                  sx={{ color: 'white', }}>
                  FitFastNow
                </Typography>
              </Grid>
              <Grid size={2}>
                <IconButton 
                    aria-label="treino" 
                    color="secundary" 
                    size="70px"
                    sx={{border_radius: "80px", color: 'white'}}
                    onClick={() => alert("Ainda não tem notificação")}
                >
                  <NotificationsNoneIcon />
                </IconButton>
              </Grid>
              <Grid size={2} alignItems="center" justifyContent="center" direction="column" display="flex">
                <Stack direction="row" spacing={4} sx={{padding: "10px"}}>
                  <Link 
                    href="#"
                    sx={{width: '10px', color: 'white'}}
                    onClick={() => alert("Ainda não fiz kkkk")}
                  > 
                   Voltar
                </Link>
                </Stack>
              </Grid>
            </Grid>
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export function CustomIcon() {
  return (
    <Box
      sx={{
        width: '1.5rem',
        height: '1.5rem',
        bgcolor: 'black',
        borderRadius: '999px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        backgroundImage:
          'linear-gradient(135deg, hsl(210, 98%, 60%) 0%, hsl(210, 100%, 35%) 100%)',
        color: 'hsla(210, 100%, 95%, 0.9)',
        border: '1px solid',
        borderColor: 'hsl(210, 100%, 55%)',
        boxShadow: 'inset 0 2px 5px rgba(255, 255, 255, 0.3)',
      }}
    >
      <DashboardRoundedIcon color="inherit" sx={{ fontSize: '1rem' }} />
    </Box>
  );
}