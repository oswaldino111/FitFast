import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import NewAppNavBar from '../nav-bar/NewAppNavbar';
import AppTheme from '../theme/AppTheme';
import Copyright from '../dashboard/internals/components/Copyright';
import CardAtividades from './components/CardAtividades';
import AppNavbarAba from '../nav-bar/AppNavbarAba';
import Requests from '../utils/Requests';
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from "react-router-dom";

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

export default function Treinos(props) {

  const [treino, setTreino] = React.useState(undefined);
  const navigate = useNavigate();

  React.useEffect(() => {
    const dados = async () => {
      const user = localStorage.getItem('user');
      const key = localStorage.getItem('key');
      const url = "https://us-central1-eztask-bi.cloudfunctions.net/PROCESSA_LOGIN";
      const tre = await Requests(url, "POST", {"USUARIO": user, "TOKEN": key, "TIPO": "DADOS_TREINO"})
      if (tre['status'] =='Login Falhou tente novamente!'){
        localStorage.removeItem("key");
        navigate('/');
      }
      setTreino(tre["PEITO"])
      return "200"
    }
    dados();
}, []);

  return (
    <AppTheme {...props} themeComponents={xThemeComponents}>
        <CssBaseline enableColorScheme />
        <Box sx={{ display: 'flex' }}>
            <Box sx={{ width: '100%', m: '2rem', maxWidth: { sm: '100%', md: '1700px' } }}>
                {/* cards */}
                <AppNavbarAba local='/home'/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <Grid
                    container
                    spacing={2}
                    columns={12}
                    sx={{ mb: (theme) => theme.spacing(2) }}
                >
                { treino === undefined ? <CircularProgress size="8rem"/> :treino.map((card, index) => (
                    <Grid key={index} size={{ xs: 12, sm: 6, lg: 3 }}>
                        <CardAtividades {...card} />
                    </Grid>
                    )) }
                </Grid>
                <Copyright sx={{ my: 4 }} />
            </Box>
            <NewAppNavBar />
        </Box>
    </AppTheme>
  );
}