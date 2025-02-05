import React,{useEffect,useState} from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { db } from '../firebase/firebase'
import { doc,getDoc } from 'firebase/firestore'
import { Box,Container } from '@mui/material'
import NavBar from '../Component/NavBar'

function ShowRoom() {
  return (
    <div>ShowRoom</div>
  )
}

export default ShowRoom