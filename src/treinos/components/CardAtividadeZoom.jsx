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
import { useNavigate } from "react-router-dom";


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

function CardAtividadesZoom({ title, value, interval, trend, image }) {

    const navigate = useNavigate();
    const labelColors = {
        up: 'success',
        down: 'error',
        neutral: 'default',
    };

    const color = labelColors[trend];
    const trendValues = { up: '+25%', down: '-25%', neutral: '+5%' };

    return (
        <Card variant="outlined" sx={{  m: '1rem', padding: "10px", height: '100%', flexGrow: 1, '&:hover': {background: "#e3e3e3"}}} onClick={() => navigate('/detalhes')}>
          <CardContent>
            <Box
              component="img"
              sx={{
                height: 233,
                width: 350,
                maxHeight: { xs: 233, md: 167 },
                maxWidth: { xs: 350, md: 250 },
              }}
              alt={title}
              src={image}
            />
              <TextField 
                id="outlined-basic" 
                label="Outlined" 
                variant="outlined" 
                slotProps={{
                  input: {
                    startAdornment: <InputAdornment position="start">series de 15-12-10-8 com</InputAdornment>,
                  },
                }}
                defaultValue={title} />
              <Stack
              direction="column"
              sx={{ justifyContent: 'space-between', flexGrow: '1', gap: 1 }}
              >
              <Stack sx={{ justifyContent: 'space-between' }}>
                  <Stack
                  direction="row"
                  sx={{ justifyContent: 'space-between', alignItems: 'center' }}
                  >
                  <Typography variant="h4" component="p">
                      {value}
                  </Typography>
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
  interval: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  trend: PropTypes.oneOf(['down', 'neutral', 'up']).isRequired,
  value: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default CardAtividadesZoom;