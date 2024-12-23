import React from 'react';
import NavBar from '../Component/NavBar.jsx';
import TypeCard from '../Component/TypeCard.jsx';
import { Box, Typography } from '@mui/material';

function Home() {
  return (
    <>
      <NavBar />
      <Box sx={{ width:'100%',paddingTop: '64px'  ,justifySelf: 'center' }}> 
        <Box sx={{
          height:'300px',
          width:'100%', 
          background: 'radial-gradient( #2196f0, #2196f9)',
          display:'flex',
          flexFlow:'column',
          alignItems:'center',
          justifyContent:'center'}}>
        <Typography
            variant="h2"
            sx={{
              fontWeight: 'bold',
              color: 'white',
              marginBottom: '16px',
            }}
          >
            Discover the Ultimate Review Platform
          </Typography>
          <Typography
            variant="h6"
            sx={{
              textAlign: 'center',
              maxWidth: '800px',
              color: '#f3f9fe',
              lineHeight: 1.5,
            }}
          >
            Welcome to your trusted source for authentic reviews. Our platform is designed to help you 
            explore genuine feedback on products, services, and experiences from a global community. 
            Whether you're looking for the best gadgets, dining spots, or travel destinations, we've got 
            you covered.
          </Typography>
        </Box >
        {/* Add margin between NavBar and TypeCard */}
        <Box  component='div' 
        sx={{mt:'16px',
        width:'800px',
        overflow:'auto',
        justifySelf:'center',
        display:'flex',
        flexFlow:'column',
        justifyContent:'center',
        boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.7)"}}>
          <Typography variant="h5" sx={{ ml: '15px', fontWeight: 'bold',color: '#0d47a1' }}>
            Categories
          </Typography>
          
          <TypeCard/>
        </Box>
      </Box>
    </>
  );
}

export default Home;
