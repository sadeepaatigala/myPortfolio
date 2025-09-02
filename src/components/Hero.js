'use client';

import { Box, Typography, Button, Avatar } from '@mui/material';
import Particles from './Particles';
import profilePic from './profile.jpg'; // Import your image

export default function Hero() {
  const scrollToSection = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box
      id="home"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        position: 'relative',
        bgcolor: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
        overflow: 'hidden',
      }}
    >
      <Particles />
      <Box sx={{ zIndex: 2 }}>
        <Avatar
          src={profilePic.src} // Use imported image
          alt="Sadeepa Atigala"
          sx={{
            width: 200,
            height: 200,
            border: '4px solid rgba(255, 255, 255, 0.3)',
            bgcolor: '#333',
            mx: 'auto',
            mb: 4,
            animation: 'fadeInUp 1s ease forwards 0.3s',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
          }}
        />
        <Typography variant="h1" sx={{ mb: 1, animation: 'fadeInUp 1s ease forwards 0.5s' }}>
          Sadeepa Atigala
        </Typography>
        <Typography variant="h6" sx={{ mb: 5, animation: 'fadeInUp 1s ease forwards 0.7s' }}>
          Software Developer | Problem Solver | Tech Enthusiast
        </Typography>
        <Typography variant="h6" sx={{ mb: 4, mt: 1, animation: 'fadeInUp 1s ease forwards 0.9s' }}>
          BSc. Information Technology Student at SLIIT
        </Typography>
        <Button
          variant="outlined"
          onClick={scrollToSection}
          sx={{
            bgcolor: '#333',
            borderColor: '#555',
            color: 'white',
            animation: 'fadeInUp 1s ease forwards 0.9s',
            '&:hover': {
              bgcolor: '#555',
              borderColor: '#777',
              transform: 'translateY(-3px)',
              boxShadow: '0 10px 25px rgba(0, 0, 0, 0.5)',
            },
          }}
        >
          Explore My Work
        </Button>
      </Box>
    </Box>
  );
}