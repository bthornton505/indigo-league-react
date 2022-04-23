import React, { useState } from 'react';
import Box from '@mui/material/Box';
import FilledInput from '@mui/material/FilledInput';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Container, Grid, TextField } from '@mui/material';

export const LoginForm = ({ ...props }) => {
  const [ name, setName ] = useState('Composed TextField');

  const handleChange = (event: any) => {
    setName(event.target.value);
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Item>xs=8</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={8}>
          <Item>xs=8</Item>
        </Grid>
      </Grid>
    </Box>
    // <Container maxWidth="sm">
    //   <Grid container spacing={2}>
    //     <Grid item xs={12}>
    //       <FormControl error variant="standard">
    //         <TextField
    //           id="standard-email-input"
    //           label="Email"
    //           type="email"
    //           autoComplete="current-email"
    //           variant="standard"
    //         />
    //       </FormControl>
    //     </Grid>
    //     <Grid item xs={12}>
    //       <FormControl>
    //         <TextField
    //           id="standard-password-input"
    //           label="Password"
    //           type="password"
    //           autoComplete="current-password"
    //           variant="standard"
    //         />
    //       </FormControl>
    //     </Grid>
    //   </Grid>
    // </Container>
  );
}

{/* <FormControl error variant="standard">
        <TextField
          id="standard-email-input"
          label="Email"
          type="email"
          autoComplete="current-email"
          variant="standard"
        />
      </FormControl>
      <FormControl>
        <TextField
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="standard"
        />
      </FormControl> */}