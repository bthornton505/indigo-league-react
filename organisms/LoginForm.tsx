import React, { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import { Box, Button, Grid, TextField } from '@mui/material';

export const LoginForm = ({ ...props }) => {
  const { login } = props;

  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const payload: any = { email, password };

    login(payload);
  }

  return (
    <Box sx={{ flexGrow: 1, textAlign: 'center', marginTop: '2rem' }}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <FormControl error variant="standard">
              <TextField
                sx={{ width: 300 }}
                id="standard-email-input"
                label="Email"
                type="email"
                autoComplete="current-email"
                variant="standard"
                onChange={event => setEmail(event?.target.value)}
              />
            </FormControl>
          </Grid>
        </Grid>
        <Grid mt={2} mb={4} container>
          <Grid item xs={12}>
            <FormControl>
              <TextField
                sx={{ width: 300 }}
                id="standard-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="standard"
                onChange={event => setPassword(event?.target.value)}
              />
            </FormControl>
          </Grid>
        </Grid>

        <Button type="submit" variant="contained">Submit</Button>
      </form>
    </Box>
  );
}
