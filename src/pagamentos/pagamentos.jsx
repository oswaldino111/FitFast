import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import NewAppNavBar from '../nav-bar/NewAppNavbar';
import AppTheme from '../theme/AppTheme';
import AppNavbarAba from '../nav-bar/AppNavbarAba';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import  cover from "./ajude.png";

import {
  chartsCustomizations,
  dataGridCustomizations,
  datePickersCustomizations,
  treeViewCustomizations,
} from '../dashboard/theme';

const styles = {
    paperContainer: {
        backgroundImage: `url(${cover})`,
        backgroundSize: 'cover',
        height: 900,
        width: `100%`,
    },
};

const xThemeComponents = {
  ...chartsCustomizations,
  ...dataGridCustomizations,
  ...datePickersCustomizations,
  ...treeViewCustomizations,
};

export default function Pagamentos(props) {


    const handleClick = () => {
        navigator.clipboard.writeText("34988033900");
        alert("PIX copiado!");
    };

    return (
        <AppTheme {...props} themeComponents={xThemeComponents}>
            <CssBaseline enableColorScheme />
            <Box sx={{
                    height: "100%",
                    backgroundImage:`url(${cover})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                }}>
                <Box 
                    sx={{ width: '100%' }}
                >
                    {/* cards */}
                    <AppNavbarAba local='/home'/>
                    <Button color="success">PIX</Button>
                </Box>
                <NewAppNavBar />
                <Paper style={styles.paperContainer} onClick={handleClick}>
                    A
                </Paper>
                
            </Box>

        </AppTheme>
    );
}