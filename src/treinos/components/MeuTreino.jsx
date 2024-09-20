import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import NewAppNavBar from '../../nav-bar/NewAppNavbar';
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
        rep: "4x12",
        image: 'https://static.vecteezy.com/ti/vetor-gratis/p1/8056909-homem-fazendo-halteres-plano-banco-press-peito-exercicio-plano-ilustracao-isolado-em-fundo-branco-vetor.jpg'
      },
      {
        title: '22kg-24kg-28kg-32kg',
        value: 'Supino inclinado com alteres',
        interval: '1 min (descanso)',
        trend: 'up',
        rep: "4x12",
        image: 'https://grandeatleta.com.br/blog/wp-content/uploads/2022/07/supino-inclinado-com-halteres-.jpg'
      },
      {
        title: '22kg-24kg-28kg-32kg',
        value: 'Cruxifixo maquina',
        interval: '1 min (descanso)',
        trend: 'up',
        rep: "4x12",
        image: 'https://static.vecteezy.com/ti/vetor-gratis/p1/32979934-homem-fazendo-maquina-dobrado-braco-peito-mosca-exercicio-borboletas-peito-area-coberta-sentado-maquina-voa-vetor.jpg'
      },
      {
        title: '22kg-24kg-28kg-32kg',
        value: 'Cross-Over maquina',
        interval: '1 min (descanso)',
        trend: 'up',
        rep: "4x12",
        image: 'https://static.vecteezy.com/ti/vetor-gratis/p3/15708466-homem-fazendo-crossover-de-cabo-em-pe-exercicio-de-moscas-de-cabo-ilustracaoial-plana-isolada-no-fundo-branco-personagem-de-treino-vetor.jpg'
      } ,
      {
        title: '22kg-24kg-28kg-32kg',
        value: 'Pullover',
        interval: '1 min (descanso)',
        trend: 'up',
        rep: "4x12",
        image: 'https://www.dicasdetreino.com.br/wp-content/uploads/2020/01/Varia%C3%A7%C3%A3o-com-Halter.jpg'
      }
]

const data_costa = [
  {
    title: '82kg',
    value: 'Puxada Aberta Barra reta',
    interval: '1 min (descanso)',
    trend: 'up',
    rep: "4x10 a 12",
    image: 'https://static.wixstatic.com/media/b29f80_87d4a873c1774fef929d0fb2bda4d295~mv2.jpg/v1/fill/w_980,h_700,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/b29f80_87d4a873c1774fef929d0fb2bda4d295~mv2.jpg'
  },
  {
    title: '70kg',
    value: 'Remada Alta Sentado na Polia Alta (Pegada Neutra)',
    interval: '1 min (descanso)',
    trend: 'up',
    rep: "4x10",
    image: 'https://i.ytimg.com/vi/zaCbXeGI8XQ/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AHUBoAC4AOKAgwIABABGGUgZShlMA8=&rs=AOn4CLCNtqWVmiW5-sOdIcu8_IBDu-FLTw'
  },
  {
    title: '50kg',
    value: 'Pulldown com Corda',
    interval: '1 min (descanso)',
    trend: 'up',
    rep: "4x12",
    image: 'https://static.wixstatic.com/media/2edbed_4bad6b7660b04c78b88cb1faa24dbc24~mv2.png/v1/fill/w_672,h_361,al_c,lg_1,q_85/2edbed_4bad6b7660b04c78b88cb1faa24dbc24~mv2.png'
  },
  {
    title: '32kg',
    value: 'Remada Curvada com Barra Reta( Pegada Supinada )',
    interval: '1 min (descanso)',
    trend: 'up',
    rep: "4x12",
    image: 'https://treinomestre.com.br/wp-content/uploads/2015/03/remada-curvada-capa.jpg'
  } ,
  {
    title: '50kg',
    value: 'Remada Baixa Triangulo',
    interval: '1 min (descanso)',
    trend: 'up',
    rep: "4x12",
    image: 'https://static.wixstatic.com/media/2edbed_aab01b9da78e450ca9577af2b91965b1~mv2.webp/v1/fill/w_806,h_454,al_c,q_85,enc_auto/2edbed_aab01b9da78e450ca9577af2b91965b1~mv2.webp'
  }
]

const data_bracos = [
  {
    title: '24',
    value: 'TricepiS Extensao',
    interval: '1 min (descanso)',
    trend: 'up',
    rep: "4x10 a 12",
    image: 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/07/triceps-nuca-com-halter.gif'
  },
  {
    title: '40',
    value: 'Tricepis testa',
    interval: '1 min (descanso)',
    trend: 'up',
    rep: "4x10",
    image: 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/03/rosca-triceps-testa-deitado-no-banco-com-barra-tradicional.gif'
   },
  {
    title: '50',
    value: 'Tricepis Corda',
    interval: '1 min (descanso)',
    trend: 'up',
    rep: "4x12",
    image: 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/07/triceps-puxada-no-pulley-com-corda.gif'
  },
  {
    title: '32',
    value: 'Rosca Scot com alteres',
    interval: '1 min (descanso)',
    trend: 'up',
    rep: "4x12",
    image: 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/11/Rosca-Scott-com-halteres-unilateral.gif'
  },
  {
    title: '50',
    value: 'Rosca direta',
    interval: '1 min (descanso)',
    trend: 'up',
    rep: "4x12",
    image: 'https://www.hipertrofia.org/blog/wp-content/uploads/2019/04/ez-barbell-curl.gif'
  },
  {
    title: '50',
    value: 'Rosca alternada',
    interval: '1 min (descanso)',
    trend: 'up',
    rep: "4x12",
    image: 'https://www.hipertrofia.org/blog/wp-content/uploads/2019/04/dumbbell-alternate-biceps-curl.gif'
  }
]

const xThemeComponents = {
  ...chartsCustomizations,
  ...dataGridCustomizations,
  ...datePickersCustomizations,
  ...treeViewCustomizations,
};

export default function MeuTreino(props) {

  const tipo = localStorage.getItem('treino');
  console.log(tipo);

  const dados = (tipo === 'costas' ? data_costa :  (tipo === 'braco' ? data_bracos : data) );

  return (
    <AppTheme {...props} themeComponents={xThemeComponents}>
        <CssBaseline enableColorScheme />
        <Box sx={{ display: 'flex' }}>
            <SideMenu />
            <Box sx={{ padding: "10px", width: '100%', maxWidth: { sm: '100%', md: '1700px' } }}>
                {/* cards */}
                <Grid
                    container
                    spacing={2}
                    columns={1}
                    sx={{ mb: (theme) => theme.spacing(2) }}
                >
                    {dados.map((card, index) => (
                    <Grid key={index} size={{ xs: 12, sm: 6, lg: 3 }}>
                        <CardAtividadeZoom {...card} />
                    </Grid>
                    ))}
                </Grid>
                <Copyright sx={{ my: 4 }} />
            </Box>
            <NewAppNavBar />
        </Box>
    </AppTheme>
  );
}