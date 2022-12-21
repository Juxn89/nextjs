import { NextPage } from 'next';
import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import { ShopLayout } from '@components/layouts/';
import { Box } from '@mui/system';

const AddressPage: NextPage = () => {
  return (
    <ShopLayout title='Address' pageDescription='Confirm destination address'>
      <Typography variant='h1' component='h1'>Address</Typography>
      <Grid container spacing={2}>
        <Grid item xs={ 12 } sm={ 6 }>
          <TextField label='Name' variant='filled' fullWidth required/>
        </Grid>
        <Grid item xs={ 12 } sm={ 6 }>
          <TextField label='Last name' variant='filled' fullWidth required/>
        </Grid>
        <Grid item xs={ 12 } sm={ 6 }>
          <TextField label='Address 1' variant='filled' fullWidth required/>
        </Grid>
        <Grid item xs={ 12 } sm={ 6 }>
          <TextField label='Address 2' variant='filled' fullWidth/>
        </Grid>
        <Grid item xs={ 12 } sm={ 6 }>
          <TextField label='Postal code' variant='filled' fullWidth/>
        </Grid>
        <Grid item xs={ 12 } sm={ 6 }>
          <TextField label='City' variant='filled' fullWidth/>
        </Grid>
        <Grid item xs={ 12 } sm={ 6 }>
          <FormControl fullWidth>
            <Select variant='filled' label="Country" value={1}>
              <MenuItem value={1}>Nicaragua</MenuItem>
              <MenuItem value={2}>Spain</MenuItem>
              <MenuItem value={3}>Argentina</MenuItem>
              <MenuItem value={4}>France</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={ 12 } sm={ 6 }>
          <TextField label='Phone' variant='filled' fullWidth/>
        </Grid>
      </Grid>
      
      <Box sx={{ mt: 5 }} display='flex' justifyContent='center'>
        <Button color='secondary' className='circular-btn' size='large'>
          Check order
        </Button>
      </Box>
    </ShopLayout>
  )
}

export default AddressPage