import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import NewAppNavBar from '../nav-bar/NewAppNavbar';
import AppTheme from '../theme/AppTheme';
import Copyright from '../dashboard/internals/components/Copyright';
import AppNavbarAba from '../nav-bar/AppNavbarAba';
import BasicSelect from './components/forms';
import { Typography } from '@mui/material';

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

export default function Propriedades(props) {


    return (
        <AppTheme {...props} themeComponents={xThemeComponents}>
            <CssBaseline enableColorScheme />
            <Box sx={{ display: 'flex' }}>
                <Box sx={{ width: '100%', m: '2rem', padding: "5px", maxWidth: { sm: '100%', md: '1700px' } }}>
                    {/* cards */}
                    <AppNavbarAba local='/home'/>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <Typography variant="h2" sx={{position: "flex", justify_content: "center", textAlign: "center"}}>
                            Minhas Definições
                        </ Typography>
                        <br />
                        <BasicSelect />

                    <Copyright sx={{ my: 4 }} />
                </Box>
                <NewAppNavBar />
            </Box>
        </AppTheme>
    );
}