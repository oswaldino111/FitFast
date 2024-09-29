import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import MenuIcon from '@mui/icons-material/Menu';
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import HandymanIcon from '@mui/icons-material/Handyman';

export default function NewAppNavBar() {
  const [value, setValue] = React.useState('recents');
  const navigate = useNavigate();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = () => {
    localStorage.removeItem("key");
    navigate('/');
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
          onClick={() => navigate("/pagamentos")}
          label="Assinar"
          value="assinar"
          icon={<MonetizationOnIcon />}
        />
        <BottomNavigationAction
          onClick={handleClick}
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          label="Menu"
          value="menu"
          icon={<MenuIcon />}
        />
      </BottomNavigation>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={() => navigate('/caracteristicas')}><HandymanIcon/> Configurações</MenuItem>
        <MenuItem onClick={() => logout}><ExitToAppIcon/> Sair</MenuItem>
      </Menu>
    </Paper>
  );
}
