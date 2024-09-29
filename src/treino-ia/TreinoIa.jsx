import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import NewAppNavBar from '../nav-bar/NewAppNavbar';
import AppTheme from '../theme/AppTheme';
import AppNavbarAba from '../nav-bar/AppNavbarAba';
import Requests from '../utils/Requests';
import Button from '@mui/material/Button';
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

export default function TreinoIa(props) {

    const [treino, setTreino] = React.useState(false);
    const [dados, setDados] = React.useState(false);

    React.useEffect(() => {
        const dados = async () => {
            const user = localStorage.getItem('user');
            const key = localStorage.getItem('key');
            const url = "https://us-central1-eztask-bi.cloudfunctions.net/PROCESSA_LOGIN";
            const tre = await Requests(url, "POST", {
            "USUARIO": user, 
            "TOKEN": key, 
            "TIPO": "TREINO_IA"});
            setDados(JSON.stringify(tre["treinos"]));
            console.log(tre["treinos"]);
            return "200"
        };
        if (treino === true){
            dados();
        }

    }, [treino]);

    return (
        <AppTheme {...props} themeComponents={xThemeComponents}>
            <CssBaseline enableColorScheme />
            <Box >
                <Box 
                    sx={{ width: '100%' }}
                >
                    {/* cards */}
                    <AppNavbarAba local='/home'/>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <Typography variant="h2" sx={{position: "flex", justify_content: "center", textAlign: "center"}}>
                        Treino IA
                    </ Typography>
                    <br />
                    ({treino === true ? dados : "Carregando"})
                    <br />
                    <Button variant="contained" onClick={() => setTreino(true)}>
                        Gerar Treino IA
                    </Button>
                </Box>
                <NewAppNavBar />
            </Box>

        </AppTheme>
    );
}