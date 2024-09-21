import * as React from 'react';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Copyright from '../internals/components/Copyright';
import StatCard from './StatCard';

const data = [
  {
    title: 'Dias ativos',
    value: '1 dia',
    interval: '',
    trend: 'down',
    data: [],
  },
  {
    title: 'Treinos realizados',
    value: '1 treino',
    interval: '',
    trend: 'down',
    data: [],
  }
];

export default function MainGrid() {
  return (
    <Box sx={{ width: '100%', maxWidth: { sm: '100%', md: '1700px' } }}>
      {/* cards */}
      <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
        Resumo
      </Typography>
      <Grid
        container
        spacing={2}
        columns={12}
        sx={{ mb: (theme) => theme.spacing(2) }}
      >
        {data.map((card, index) => (
          <Grid key={index} size={{ xs: 12, sm: 6, lg: 3 }}>
            <StatCard {...card} />
          </Grid>
        ))}
      </Grid>
      <Copyright sx={{ my: 4 }} />
    </Box>
  );
}