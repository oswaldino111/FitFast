import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import HelpIcon from '@mui/icons-material/Help';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import MenuIcon from '@mui/icons-material/Menu';
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router-dom';

export default function NewAppNavBar() {
  const [value, setValue] = React.useState('recents');
  const navigate = useNavigate();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
      <BottomNavigation  value={value} onChange={handleChange}>
        <BottomNavigationAction
          onClick={() => navigate('/home')}
          label="Inicio"
          value="inicio"
          icon={<HomeIcon />}
        />
        <BottomNavigationAction
          onClick={() => console.log("compras")}
          label="Assinar"
          value="assinar"
          icon={<MonetizationOnIcon />}
        />
        <BottomNavigationAction
          onClick={() => console.log("ajuda")}
          label="Ajuda"
          value="ajuda"
          icon={<HelpIcon />}
        />
        <BottomNavigationAction
          onClick={() => console.log("menu")}
          label="Menu"
          value="menu"
          icon={<MenuIcon />}
        />
      </BottomNavigation>
    </Paper>
  );
}
