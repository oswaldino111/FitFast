import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Divider from '@mui/material/Divider';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import MuiCard from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import ForgotPassword from './ForgotPassword';
import { GoogleIcon, FacebookIcon, SitemarkIcon } from '../icons/CustomIcons';
import AppTheme from '../theme/AppTheme';
import Requests from '../utils/Requests';
import { useNavigate } from "react-router-dom";
import { Paper } from '@mui/material';

const Card = styled(MuiCard)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  width: '100%',
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: 'auto',
  [theme.breakpoints.up('sm')]: {
    maxWidth: '450px',
  },
  boxShadow:
    'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
  ...theme.applyStyles('dark', {
    boxShadow:
      'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
  }),
}));

const SignInContainer = styled(Stack)(({ theme }) => ({
  padding: 20,
  marginTop: '10vh',
  '&::before': {
    content: '""',
    display: 'block',
    position: 'absolute',
    zIndex: -1,
    inset: 0,
    backgroundImage:
      'radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))',
    backgroundRepeat: 'no-repeat',
    ...theme.applyStyles('dark', {
      backgroundImage:
        'radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))',
    }),
  },
}));

export default function SignIn(props) {
  const [emailError, setEmailError] = React.useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = React.useState('');
  const [passwordError, setPasswordError] = React.useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  

  const [emailUser, setEmail] = React.useState("");
  const [senhaUser, setSenha] = React.useState("");
  const [lembrar, setLembrar] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleLembrar = (e) => {
    console.log(lembrar);
    setLembrar(!lembrar);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  const validateInputs = async ( navigate ) => {
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    const url = "https://us-central1-eztask-bi.cloudfunctions.net/PROCESSA_LOGIN";


    const login = async() => {
      return await Requests(url, "POST", {"USUARIO": emailUser, "SENHA": senhaUser, "TIPO": "DADOS"});
    };

    let isValid = true;

    if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
      setEmailError(true);
      setEmailErrorMessage('Please enter a valid email address.');
      isValid = false;
    } else {
      setEmailError(false);
      setEmailErrorMessage('');
    }

    if (!password.value || password.value.length < 6) {
      setPasswordError(true);
      setPasswordErrorMessage('Senha tem que possui mais que 6 caracteres!');
      isValid = false;
    } else {
      setPasswordError(false);
      setPasswordErrorMessage('');

      let retorno = await login();

      if (retorno.hasOwnProperty("NOME")){
        localStorage.setItem('nome', retorno["NOME"]);
        localStorage.setItem('user', emailUser);
        if (lembrar === true) {
          localStorage.setItem('key', retorno["key"]);
        }
        navigate('home');
      } else {
        console.log(retorno)
        setPasswordError(true);
        setPasswordErrorMessage('Dados incorretos para Login, tente novamente!');
      }
      
    }

    console.log(isValid);
    return isValid;
  };

  React.useEffect(() => {
    if (localStorage.getItem('key') && localStorage.getItem('user') ){
      navigate('home');
    }
  });


  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <SignInContainer direction="column" justifyContent="space-between">
        <Card variant="outlined">
          <Box
              component="img"
              sx={{
                height: 130,
                width: 130,
                maxHeight: { xs: 233, md: 167 },
                maxWidth: { xs: 350, md: 250 },
                display: 'flex',
              }}
              alt="logo"
              src="../logo.png"
            />
          <Typography
            component="h1"
            variant="h4"
            sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}
          >
            Entrar
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              gap: 2,
            }}
          >
            <FormControl>
              <FormLabel htmlFor="email">Email</FormLabel>
              <TextField
                error={emailError}
                helperText={emailErrorMessage}
                id="email"
                type="email"
                name="email"
                placeholder="your@email.com"
                autoComplete="email"
                autoFocus
                required
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
                variant="outlined"
                color={emailError ? 'error' : 'primary'}
                sx={{ ariaLabel: 'email' }}
              />
            </FormControl>
            <FormControl>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <FormLabel htmlFor="forgot-password">Senha</FormLabel>
                <Link
                  component="button"
                  onClick={() => navigate('password')}
                  variant="body2"
                  sx={{ alignSelf: 'baseline' }}
                >
                  Esqueceu sua senha?
                </Link>
              </Box>
              <TextField
                error={passwordError}
                helperText={passwordErrorMessage}
                name="password"
                placeholder="••••••"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) => setSenha(e.target.value)}
                autoFocus
                required
                fullWidth
                variant="outlined"
                color={passwordError ? 'error' : 'primary'}
              />
            </FormControl>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" onClick={(e) => handleLembrar(e)}/>}
              label="Lembrar"
            />
            <ForgotPassword open={open} handleClose={handleClose} />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              onClick={() => validateInputs(navigate) }
            >
              Entrar
            </Button>
            <Typography sx={{ textAlign: 'center' }}>
              Não possui conta?{' '}
              <span>
                <Link
                  href="/sign-up/"
                  variant="body2"
                  sx={{ alignSelf: 'center' }}
                >
                  Cadastrar
                </Link>
              </span>
            </Typography>
          </Box>
          {/**
          <Divider>ou</Divider>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Button
              type="submit"
              fullWidth
              variant="outlined"
              onClick={() => alert('Entre com o Google')}
              startIcon={<GoogleIcon />}
            >
              Entre com o Google
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="outlined"
              onClick={() => alert('Entre com o Facebook')}
              startIcon={<FacebookIcon />}
            >
              Entre com o Facebook
            </Button>
          </Box>
           */}
        </Card>
      </SignInContainer>
    </AppTheme>
  );
}