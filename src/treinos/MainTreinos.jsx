import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import AppNavbar from '../nav-bar/AppNavbar';
import SideMenu from '../dashboard/components/SideMenu';
import AppTheme from '../theme/AppTheme';
import Copyright from '../dashboard/internals/components/Copyright';
import CardAtividades from './components/CardAtividades';
import {
  chartsCustomizations,
  dataGridCustomizations,
  datePickersCustomizations,
  treeViewCustomizations,
} from '../dashboard/theme';

const data = [
  {
    title: 'Segunda-feira',
    value: 'Peito',
    interval: '45 min (médio)',
    trend: 'up',
    escolha: "peito"
  },
  {
      title: 'Terça-feira',
      value: 'Perna',
      interval: '45 min (médio)',
      trend: 'up',
      escolha: "perna"
    },
    {
      title: 'Quarta-feira',
      value: 'Ombros',
      interval: '45 min (médio)',
      trend: 'up',
      escolha: "ombro"
    },
    {
      title: 'Quinta-feira',
      value: 'Costas',
      interval: '45 min (médio)',
      trend: 'up',
      escolha: "costas"
    } ,
    {
      title: 'Sexta-feira',
      value: 'Braços',
      interval: '45 min (médio)',
      trend: 'up',
      escolha: "braco"
    }
]

const xThemeComponents = {
  ...chartsCustomizations,
  ...dataGridCustomizations,
  ...datePickersCustomizations,
  ...treeViewCustomizations,
};

export default function Treinos(props) {
  return (
    <AppTheme {...props} themeComponents={xThemeComponents}>
        <CssBaseline enableColorScheme />
        <Box sx={{ display: 'flex' }}>
            <SideMenu />
            <AppNavbar />
            <Box sx={{ width: '100%', m: '4rem', maxWidth: { sm: '100%', md: '1700px' } }}>
                {/* cards */}
                <Grid
                    container
                    spacing={2}
                    columns={12}
                    sx={{ mb: (theme) => theme.spacing(2) }}
                >
                    {data.map((card, index) => (
                    <Grid key={index} size={{ xs: 12, sm: 6, lg: 3 }}>
                        <CardAtividades {...card} />
                    </Grid>
                    ))}
                </Grid>
                <Copyright sx={{ my: 4 }} />
            </Box>
        </Box>
    </AppTheme>
  );
}