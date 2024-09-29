import * as React from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import CheckIcon from '@mui/icons-material/Check';
import { useNavigate } from "react-router-dom";
import Radio from '@mui/material/Radio';
import Requests from '../../utils/Requests';
import CardMedia from '@mui/material/CardMedia';

function AreaGradient({ color, id }) {
  return (
    <defs>
      <linearGradient id={id} x1="50%" y1="0%" x2="50%" y2="100%">
        <stop offset="0%" stopColor={color} stopOpacity={0.3} />
        <stop offset="100%" stopColor={color} stopOpacity={0} />
      </linearGradient>
    </defs>
  );
}

AreaGradient.propTypes = {
  color: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

function CardAtividadesZoom({ ID,  title, value, interval, trend, rep, image }) {

    const navigate = useNavigate();
    const labelColors = {
        up: 'success',
        down: 'error',
        neutral: 'default',
    };

    const color = labelColors[trend];
    const trendValues = { up: '+25%', down: '-25%', neutral: '+5%' };
    const tipo = localStorage.getItem('treino');
    const [value_change, setValue] = React.useState(0);
    const [colorButton, setColor] = React.useState("black");

    const handleChange = async () => {
      console.log("Aqui");
      alert("Valor salvo!");
      const user = localStorage.getItem('user');
      const key = localStorage.getItem('key');
      const url = "https://us-central1-eztask-bi.cloudfunctions.net/PROCESSA_LOGIN";
      await Requests(url, "POST", {"USUARIO": user, "TOKEN": key, "TIPO": "DADOS_TREINO_CARGAS", "KEY": tipo, "CARGA": value_change, "ID": ID})
      return "200"
    };


    return (
        <Card variant="outlined" sx={{  m: '1rem', padding: "8px", height: '100%', flexGrow: 1, '&:hover': {background: "#e3e3e3"}}} onClick={() => navigate('/detalhes')}>
          <CardContent>
            <Typography variant="h4" component="p">
              <Radio  />{title} 
            </Typography>
            {/** 
            <Box
              component="img"
              sx={{
                height: 233,
                width: 350,
                maxHeight: { xs: 233, md: 167 },
                maxWidth: { xs: 350, md: 250 },
              }}
              alt={value}
              src={image}
            />
            */}
            
            <CardMedia
              sx={{
                height: 233,
                width: 350,
                maxHeight: { xs: 233, md: 167 },
                maxWidth: { xs: 350, md: 250 },
              }}
              component='video'
              image={image}
              src={image}
              autoPlay
            />
            
              <TextField 
                id="outlined-basic"
                variant="outlined" 
                slotProps={{
                  input: {
                    startAdornment: <InputAdornment position="start">series de {rep} com</InputAdornment>,
                    endAdornment: <CheckIcon 
                                        sx={{padding: "2px", color: colorButton}}
                                        onClick={() => handleChange()}
                                        onMouseLeave= {() => setColor("red") }
                                        onMouseOver={() => setColor("green") } />
                  },
                }}
                defaultValue={value} 
                onChange={(e) => setValue(e.target.value)}/>
              <Stack
              direction="column"
              sx={{ justifyContent: 'space-between', flexGrow: '1', gap: 1 }}
              >
              <Stack sx={{ justifyContent: 'space-between' }}>
                  <Stack
                  direction="row"
                  sx={{ justifyContent: 'space-between', alignItems: 'center' }}
                  >
                    <Chip size="small" color={color} label={trendValues[trend]} />
                  </Stack>
                  <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                  {interval}
                  </Typography>
              </Stack>
              </Stack>
          </CardContent>
        </Card>
    );
}

CardAtividadesZoom.propTypes = {
  ID: PropTypes.string.isRequired,
  interval: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  trend: PropTypes.oneOf(['down', 'neutral', 'up']).isRequired,
  value: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rep: PropTypes.string.isRequired,
};

export default CardAtividadesZoom;