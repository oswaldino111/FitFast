import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Requests from '../../utils/Requests';

export default function BasicSelect() {
  const [idade, setIdade] = React.useState(18);
  const [peso_c, setPeso] = React.useState(0);
  const [altura_c, setAltura] = React.useState(0);
  const [dias_c, setDias] = React.useState(0);
  const [cardio_c, setCardio] = React.useState("SIM");
  const [objetivo, setObjetivo] = React.useState(0);
  const [sexo, setSexo] = React.useState("M");
  const [imc, setImc] = React.useState(0);

  React.useEffect(() => {
    const dados = async () => {
      const user = localStorage.getItem('user');
      const key = localStorage.getItem('key');
      const url = "https://us-central1-eztask-bi.cloudfunctions.net/PROCESSA_LOGIN";
      const tre = await Requests(url, "POST", {"USUARIO": user, "TOKEN": key, "TIPO": "DADOS_USER"})
      setIdade(tre["IDADE"]);
      setPeso(tre["PESO"]);
      setAltura(tre["ALTURA"]);
      setDias(tre["DIAS"]);
      setCardio(tre["CARDIO"]);
      setObjetivo(tre["OBJETIVO"]);
      setSexo(tre["SEXO"]);
      return "200"
    }
    dados();
}, []);

  const dados = async () => {

    const user = localStorage.getItem('user');
    const key = localStorage.getItem('key');
    const url = "https://us-central1-eztask-bi.cloudfunctions.net/PROCESSA_LOGIN";
    const tre = await Requests(url, "POST", {
      "USUARIO": user, 
      "TOKEN": key, 
      "VALUES": {"PESO": peso_c, "IDADE": idade, "ALTURA": altura_c, "DIAS": dias_c, "CARDIO": cardio_c, "OBJETIVO": objetivo, "SEXO": sexo}, 
      "TIPO": "ATUALIZANDO_DADOS"});
    return "200"
  }

  let numeros = [];
  for (let i = 15; i <= 80; i++) {
    numeros.push(i);
  }

  let altura = [];
  for (let i = 100; i <= 220; i++) {
    altura.push(i);
  }

  let peso = [];
  for (let i = 30; i <= 220; i++) {
    peso.push(i);
  }

  let dias = [];
  for (let i = 1; i <= 7; i++) {
    dias.push(i);
  }

  React.useEffect(() => {
    const imc = () => {
      if (peso_c !== 0 && altura_c !== 100) {
        const nova_altura = altura_c/100;
        const c_imc = peso_c/(nova_altura*nova_altura)
        let tipo = ''
        if (c_imc <= 18.5){
          tipo = "Baixo Peso"
        } else if (c_imc <= 24.9){
          tipo = "Peso ideal"
        }else if (c_imc <= 29.99){
          tipo = "Sobrepeso"
        }else if (c_imc <= 34.9){
          tipo = "Obesidade 1"
        }else if (c_imc <= 39.9){
          tipo = "Obesidade 2"
        }else if (c_imc >= 40){
          tipo = "Baixo Peso"
        }
        setImc(parseFloat(c_imc).toFixed(2) + " " + tipo);
      }
    };

    imc();

}, [peso_c, altura_c]);


  return (
    <Box sx={{ minWidth: 120, flexGrow: 1 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label-1">Objetivo</InputLabel>
        <Select
          labelId="demo-simple-select-label-1"
          id="demo-simple-select-1"
          value={objetivo}
          label="Objetivo"
          onChange={(event) => setObjetivo(event.target.value)}
          sx={{ minWidth: "90%" }}
        >
          <MenuItem value="Hipertrofia" key="Hipertrofia">Hipertrofia</MenuItem>
          <MenuItem value="Emagrecer" key="Emagrecer">Emagrecer</MenuItem>
          <MenuItem value="Fisioterapia" key="Fisioterapia">Fisioterapia</MenuItem>
          <MenuItem value="Mobilidade" key="Mobilidade">Mobilidade</MenuItem>
          <MenuItem value="Resistencia" key="Resistencia">Resistencia</MenuItem>
          <MenuItem value="Força" key="Força">Força</MenuItem>
        </Select>
      </FormControl>
      <br />
      <br />
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label-2">Idade</InputLabel>
        <Select
          labelId="demo-simple-select-label-2"
          id="demo-simple-select-2"
          value={idade}
          label="Idade"
          onChange={(event) => setIdade(event.target.value)}
          sx={{ minWidth: "90%" }}
        >
          {numeros.map((value) => (
            <MenuItem value={value} key={value}>{value}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <br />
      <br />
      <Grid container spacing={2}>
        <Grid size={6}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label-2">Altura</InputLabel>
            <Select
              labelId="demo-simple-select-label-2"
              id="demo-simple-select-2"
              value={altura_c}
              label="altura"
              onChange={(event) => setAltura(event.target.value)}
              sx={{ minWidth: "90%" }}
            >
              {altura.map((value) => (
                <MenuItem value={value} key={value}>{value}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </ Grid>
        <Grid size={6}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label-2">Peso</InputLabel>
            <Select
              labelId="demo-simple-select-label-2"
              id="demo-simple-select-2"
              value={peso_c}
              label="peso"
              onChange={(event) => setPeso(event.target.value)}
              sx={{ minWidth: "90%" }}
              endAdornment="kg"
            >
              {peso.map((value) => (
                <MenuItem value={value} key={value}>{value}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </ Grid>
        <Grid size={12}>
          <Typography variant="h5" sx={{position: "flex", justify_content: "center", textAlign: "center"}}>
              Seu IMC é {imc}
          </ Typography>
        </Grid>
        <Grid size={6}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label-2">Quantidades Treino por Semana</InputLabel>
            <Select
              labelId="demo-simple-select-label-2"
              id="demo-simple-select-2"
              value={dias_c}
              label="dias"
              onChange={(event) => setDias(event.target.value)}
              sx={{ minWidth: "90%" }}
            >
              {dias.map((value) => (
                <MenuItem value={value} key={value}>{value}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </ Grid>
        <Grid size={6}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label-2">Cardio</InputLabel>
            <Select
              labelId="demo-simple-select-label-2"
              id="demo-simple-select-2"
              value={cardio_c}
              label="cardio"
              onChange={(event) => setCardio(event.target.value)}
              sx={{ minWidth: "90%" }}
            >
                <MenuItem value={"SIM"} key={"SIM"}>{"SIM"}</MenuItem>
                <MenuItem value={"NÃO"} key={"NÃO"}>{"NÃO"}</MenuItem>
            </Select>
          </FormControl>
        </ Grid>
        <Grid size={6}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label-2">Sexo</InputLabel>
            <Select
              labelId="demo-simple-select-label-2"
              id="demo-simple-select-2"
              value={sexo}
              label="sexo"
              onChange={(event) => setSexo(event.target.value)}
              sx={{ minWidth: "90%" }}
            >
                <MenuItem value={"Masculino"} key={"Masculino"}>{"Masculino"}</MenuItem>
                <MenuItem value={"Feminino"} key={"Feminino"}>{"Feminino"}</MenuItem>
            </Select>
          </FormControl>
        </ Grid>
        <br />
        <br />
        <br />
        <br />
        <Grid size={12}>
          <Box textAlign='center'>
              <Button variant="contained" color="error" onClick={dados}>
                    Salvar
              </Button>
            </Box>
        </Grid>
      </ Grid>
    </Box>
  );
}