import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import AppNavbar from '../nav-bar/AppNavbar';
import AppTheme from '../theme/AppTheme';
import AppNavbarAba from '../nav-bar/AppNavbarAba';
import Button from '@mui/material/Button';
import NewAppNavBar from '../nav-bar/NewAppNavbar';
import Grid from '@mui/material/Grid2';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useNavigate } from 'react-router-dom';

import {
  chartsCustomizations,
  dataGridCustomizations,
  datePickersCustomizations,
  treeViewCustomizations,
} from '../dashboard/theme';


const xThemeComponents = {
  ...chartsCustomizations,
  ...dataGridCustomizations,
  ...datePickersCustomizations,
  ...treeViewCustomizations,
};

export default function Main(props) {

    const navigate = useNavigate();

    return (
        <AppTheme {...props} themeComponents={xThemeComponents}>
            <CssBaseline enableColorScheme />
            <Box >
                <Box 
                    sx={{ width: '100%' }}
                >
                    {/* cards */}
                    <AppNavbarAba local='/home'/>
                    <Button color="success">PIX</Button>
                </Box>
                <AppNavbar />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid size={{ xs: 2, md: 1 }} offset={{ xs: 1, md: 0 }}>
                            <Box
                                sx={{
                                width: 150,
                                height: 150,
                                borderRadius: 1,
                                bgcolor: 'primary.main',
                                '&:hover': {
                                    bgcolor: 'primary.dark',
                                },
                                }}
                            >
                                <SmartToyIcon sx={{ fontSize: 150 }} onClick={() => navigate('/treino-ia')}/>
                            </Box>
                        </Grid>
                        <Grid size={{ xs: 4, md: 2 }} offset={{ xs: 3, md: 0 }}>
                            <Box
                                sx={{
                                width: 150,
                                height: 150,
                                borderRadius: 1,
                                bgcolor: 'primary.main',
                                '&:hover': {
                                    bgcolor: 'primary.dark',
                                },
                                }}
                                >
                                <AddCircleOutlineIcon sx={{ fontSize: 150 }} />
                            </Box>
                        </Grid>
                        <Grid size={{ xs: 2, md: 1 }} offset={{ xs: 1, md: 0 }}>
                            <Box
                                sx={{
                                width: 150,
                                height: 150,
                                borderRadius: 1,
                                bgcolor: 'primary.main',
                                '&:hover': {
                                    bgcolor: 'primary.dark',
                                },
                                }}
                                >
                                <ShowChartIcon sx={{ fontSize: 150 }} onClick={() => navigate('/dash')}/>
                            </Box>
                        </Grid>
                        <Grid size={{ xs: 4, md: 2 }} offset={{ xs: 3, md: 0 }}>
                            <Box
                                sx={{
                                width: 150,
                                height: 150,
                                borderRadius: 1,
                                bgcolor: 'primary.main',
                                '&:hover': {
                                    bgcolor: 'primary.dark',
                                },
                                }}
                                >
                                <InstagramIcon sx={{ fontSize: 150 }} />
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <NewAppNavBar />
        </AppTheme>
    );
}