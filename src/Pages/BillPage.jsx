import React from 'react'
import { Box,Typography,Button } from '@mui/material'
import { useAuth } from '../Auth/useAuthForm'
import { useLocation } from 'react-router-dom'

function BillPage() {
  const {styleMap} = useAuth();
  const location = useLocation();

  const style = styleMap[location.pathname];
  return (
    <>
      <Box component='div' sx={style}>
        <Box component='div'>
          <Typography variant='h4' component='h4'>ชำระเงิน</Typography>
        </Box>
      </Box>
    </>
  )
}

export default BillPage