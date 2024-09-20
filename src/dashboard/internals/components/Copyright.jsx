import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

export default function Copyright(props) {
  return (
    <Typography
      variant="body2"
      align="center"
      {...props}
      sx={[
        {
          color: 'text.secondary',
          position: 'fixed', 
          bottom: 0
        },
        ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
      ]}
    >
      {'Copyright © '}
      <Link color="inherit">
        Oswaldo Veloso
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}