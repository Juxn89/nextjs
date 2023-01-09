import { NextPage } from 'next'
import NextLink from 'next/link'
import { Box, Button, Grid, Link, TextField, Typography } from '@mui/material';
import { AuthLayout } from '@components/layouts/AuthLayout';

const LoginPage: NextPage = () => {
  return (
    <AuthLayout title='Sign in'>
      <Box sx={{ width: 350, padding: '10px 20px' }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant='h1' component='h1'>Sign in</Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField label="Email" variant='filled' fullWidth></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField label="Password" variant='filled' fullWidth></TextField>
          </Grid>
          <Grid item xs={12}>
            <Button color='secondary' className='circular-btn' size='large' fullWidth>
              Log in
            </Button>
          </Grid>
          <Grid item xs={12} display='flex' justifyContent='center'>
            Don&apos;t have an account? &nbsp;
            <NextLink href='/auth/register' passHref legacyBehavior>
              <Link underline='always'>
                Sign up
              </Link>
            </NextLink>
          </Grid>
        </Grid>
      </Box>
    </AuthLayout>
  )
}

export default LoginPage