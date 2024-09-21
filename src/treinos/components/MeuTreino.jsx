import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import NewAppNavBar from '../../nav-bar/NewAppNavbar';
import SideMenu from '../../dashboard/components/SideMenu';
import AppTheme from '../../theme/AppTheme';
import Copyright from '../../dashboard/internals/components/Copyright';
import CardAtividadeZoom from './CardAtividadeZoom';
import AppNavbarAba from '../../nav-bar/AppNavbarAba';

import Button from '@mui/material/Button';
import Requests from '../../utils/Requests';
import {
  chartsCustomizations,
  dataGridCustomizations,
  datePickersCustomizations,
  treeViewCustomizations,
} from '../../dashboard/theme';

const xThemeComponents = {
  ...chartsCustomizations,
  ...dataGridCustomizations,
  ...datePickersCustomizations,
  ...treeViewCustomizations,
};

export default function MeuTreino(props) {

  const [treino, setTreino] = React.useState([]);

  React.useEffect(() => {
    const tipo = localStorage.getItem('treino');
    const dados = async () => {
      const user = localStorage.getItem('user');
      const key = localStorage.getItem('key');
      const url = "https://us-central1-eztask-bi.cloudfunctions.net/PROCESSA_LOGIN";
      const tre = await Requests(url, "POST", {"USUARIO": user, "TOKEN": key, "TIPO": "DADOS_TREINO_DETALHES", "KEY": tipo})
      setTreino(tre[tipo])
      return "200"
    }
    dados();
}, []);

  const [inicio, setInicio] = React.useState(null);
  const [buttonInicio, SetButtonInicio] = React.useState(null);

  React.useEffect(() => {
    const status = () => {
    if (inicio == null){
        return (
          <Button variant="contained" color="success" onClick={() => setInicio("andamento")}>
            Iniciar Treino
          </Button>
        );
    } else if (inicio === "andamento") {
      return (
        <Button variant="contained" color="secondary" onClick={() => setInicio("pausado")}>
          Pausar Treino
        </Button>
      );
    } else {
      return (
        <Button variant="contained" color="secondary" onClick={() => setInicio("andamento")}>
          Retomar Treino
        </Button>
      );
    }
    }
    SetButtonInicio(status);
  }, [inicio]);

  return (
    <AppTheme {...props} themeComponents={xThemeComponents}>
        <CssBaseline enableColorScheme />
        <Box sx={{ display: 'flex' }}>
            <SideMenu />
            <Box sx={{ padding: "10px", width: '100%', maxWidth: { sm: '100%', md: '1700px' } }}>
              <AppNavbarAba local='/treinos'/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                {/* cards */}
                <Box textAlign='center'>
                  { buttonInicio }
                </Box>
                <Grid
                    container
                    spacing={2}
                    columns={1}
                    sx={{ mb: (theme) => theme.spacing(2) }}
                >
                    {treino.map((card, index) => (
                      <>
                        <Grid key={index} size={{ xs: 12, sm: 6, lg: 3 }}>
                            <CardAtividadeZoom {...card} />
                        </Grid>
                        <br/>
                      </>
                    ))}

                </Grid>
                <Box textAlign='center'>
                  <Button variant="contained" color="error" onClick={() => setInicio("fim")}>
                    Finalizar treino
                  </Button>
                </Box>
                <br/>
                <br/>
                <br/>
                <br/>
            </Box>

            <NewAppNavBar />
        </Box>
    </AppTheme>
  );
}