import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AnalyticsRoundedIcon from '@mui/icons-material/AnalyticsRounded';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from "react-router-dom";

const mainListItems = [
  { text: 'Home', icon: <HomeRoundedIcon />, redirect: '/'},
  { text: 'Minhas Atividades', icon: <DirectionsRunIcon />, redirect: '/treinos'},
  { text: 'Cadastros', icon: <AddIcon />, redirect: '/cadastros'},
  { text: 'Estatisticas', icon: <AnalyticsRoundedIcon />, redirect: '/estatisticas'},
  { text: 'Clientes', icon: <PeopleRoundedIcon />, redirect: '/clientes'},
];

const secondaryListItems = [
  { text: 'Sobre', icon: <InfoRoundedIcon />, redirect: '/sobre'},
  { text: 'Feedback', icon: <HelpRoundedIcon />, redirect: '/feedback'},
];

export default function MenuContent() {
  const navigate = useNavigate();

  return (
    <Stack sx={{ flexGrow: 1, p: 1, justifyContent: 'space-between' }}>
      <List dense>
        {mainListItems.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ display: 'block' }}  onClick={() => navigate(item.redirect)}>
            <ListItemButton selected={index === 0}>
              <ListItemIcon >{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <List dense>
        {secondaryListItems.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ display: 'block' }}>
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Stack>
  );
}