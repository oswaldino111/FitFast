import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import AppNavbar from '../../nav-bar/AppNavbar';
import SideMenu from '../../dashboard/components/SideMenu';
import AppTheme from '../../theme/AppTheme';
import Copyright from '../../dashboard/internals/components/Copyright';
import CardAtividadeZoom from './CardAtividadeZoom';
import {
  chartsCustomizations,
  dataGridCustomizations,
  datePickersCustomizations,
  treeViewCustomizations,
} from '../../dashboard/theme';

const data = [
      {
        title: '22kg-24kg-28kg-32kg',
        value: 'Supino com alteres',
        interval: '1 min (descanso)',
        trend: 'up',
        image: 'https://static.vecteezy.com/ti/vetor-gratis/p1/8056909-homem-fazendo-halteres-plano-banco-press-peito-exercicio-plano-ilustracao-isolado-em-fundo-branco-vetor.jpg'
      },
      {
        title: '22kg-24kg-28kg-32kg',
        value: 'Supino inclinado com alteres',
        interval: '1 min (descanso)',
        trend: 'up',
        image: 'https://grandeatleta.com.br/blog/wp-content/uploads/2022/07/supino-inclinado-com-halteres-.jpg'
      },
      {
        title: '22kg-24kg-28kg-32kg',
        value: 'Cruxifixo maquina',
        interval: '1 min (descanso)',
        trend: 'up',
        image: 'https://static.vecteezy.com/ti/vetor-gratis/p1/32979934-homem-fazendo-maquina-dobrado-braco-peito-mosca-exercicio-borboletas-peito-area-coberta-sentado-maquina-voa-vetor.jpg'
      },
      {
        title: '22kg-24kg-28kg-32kg',
        value: 'Cross-Over maquina',
        interval: '1 min (descanso)',
        trend: 'up',
        image: 'https://static.vecteezy.com/ti/vetor-gratis/p3/15708466-homem-fazendo-crossover-de-cabo-em-pe-exercicio-de-moscas-de-cabo-ilustracaoial-plana-isolada-no-fundo-branco-personagem-de-treino-vetor.jpg'
      } ,
      {
        title: '22kg-24kg-28kg-32kg',
        value: 'Pullover',
        interval: '1 min (descanso)',
        trend: 'up',
        image: 'https://www.dicasdetreino.com.br/wp-content/uploads/2020/01/Varia%C3%A7%C3%A3o-com-Halter.jpg'
      }
]

const xThemeComponents = {
  ...chartsCustomizations,
  ...dataGridCustomizations,
  ...datePickersCustomizations,
  ...treeViewCustomizations,
};

export default function MeuTreino(props) {
  return (
    <AppTheme {...props} themeComponents={xThemeComponents}>
        <CssBaseline enableColorScheme />
        <Box sx={{ display: 'flex' }}>
            <SideMenu />
            <AppNavbar />
            <Box sx={{ padding: "10px", width: '100%', maxWidth: { sm: '100%', md: '1700px' } }}>
                {/* cards */}
                <Grid
                    container
                    spacing={2}
                    columns={1}
                    sx={{ mb: (theme) => theme.spacing(2) }}
                >
                    {data.map((card, index) => (
                    <Grid key={index} size={{ xs: 12, sm: 6, lg: 3 }}>
                        <CardAtividadeZoom {...card} />
                    </Grid>
                    ))}
                </Grid>
                <Copyright sx={{ my: 4 }} />
            </Box>
        </Box>
    </AppTheme>
  );
}