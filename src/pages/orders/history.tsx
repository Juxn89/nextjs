import { NextPage } from 'next'
import NextLink from 'next/link'
import { Chip, Grid, Link, Typography } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import { GridColDef, GridRenderCellParams, GridValueGetterParams } from '@mui/x-data-grid/models'
import { ShopLayout } from '@components/layouts'

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'fullName', headerName: 'Full Name', width: 300 },
  { 
    field: 'paid', 
    headerName: 'Paid-up', 
    description: 'Show if the order has been paid-up', 
    width: 200, 
    renderCell: (params: GridRenderCellParams) => {
      return (
        params.row.paid 
          ? <Chip color='success' label='Paid-up' variant='outlined'/> 
          : <Chip color='error' label='Outstanding' variant='outlined'/>
      )
    } 
  },  
  { 
    field: 'order', 
    headerName: '', 
    width: 100,
    sortable: false,
    filterable: false,
    hideable: false, 
    renderCell: (params: GridRenderCellParams) => {
      return (
        <NextLink href={ `/orders/${params.row.id}` } passHref legacyBehavior>
          <Link underline="hover">
            Go to order
          </Link>
        </NextLink>
      )
    },
  },
]

const rows = [
  { id: '1', paid: false, fullName: 'Juan Gómez' },
  { id: '2', paid: true, fullName: 'Giobla Lorente' },
  { id: '3', paid: true, fullName: 'Alicia Isabella' },
  { id: '4', paid: false, fullName: 'David Martin' },
]

const HistoryPage: NextPage = () => {
  return (
    <ShopLayout title={'Orders history'} pageDescription={'Orders history'}>
      <Typography variant='h1' component="h1">
        <Grid container>
          <Grid item xs={12} sx={{ height: 650, width: '100%' }}>
            <DataGrid columns={ columns } rows={  rows} pageSize={10} rowsPerPageOptions={ [10] }/>
          </Grid>
        </Grid>
      </Typography>
    </ShopLayout>
  )
}

export default HistoryPage