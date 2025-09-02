'use client';

import { useCallback } from 'react';
import { Box, Typography, Grid } from '@mui/material';
import Link from 'next/link';

export default function Footer() {
  const scrollToSection = useCallback((sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <Box sx={{ bgcolor: '#0a0a0a', py: 6, borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
      <Box sx={{ maxWidth: 1200, mx: 'auto', px: 2 }}>
        <Grid container spacing={4} sx={{ mb: 4 }}>
          <Grid item xs={12} md={3}>
            <Typography variant="h3" sx={{ mb: 2 }}>
              About
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Passionate software developer and BSc. IT student at SLIIT, dedicated to creating innovative solutions and learning cutting-edge technologies.
            </Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="h3" sx={{ mb: 2 }}>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {['About Me', 'Education', 'Experience', 'Projects'].map((text, idx) => (
                <Link
                  key={idx}
                  href={`#${text.toLowerCase().replace(' ', '-')}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(text.toLowerCase().replace(' ', '-'));
                  }}
                  style={{
                    color: '#aaaaaa',
                    textDecoration: 'none',
                    '&:hover': { color: '#ffffff' },
                  }}
                >
                  {text}
                </Link>
              ))}
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="h3" sx={{ mb: 2 }}>
              Connect
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link href="mailto:sadeeatigala@gmail.com" style={{ color: '#aaaaaa', textDecoration: 'none' }}>
                sadeeatigala@gmail.com 
              </Link>
              <Link href="https://www.linkedin.com/in/sadeepa-atigala/" target="_blank" style={{ color: '#aaaaaa', textDecoration: 'none' }}>
                LinkedIn
              </Link>
              <Link href="https://github.com/sadeepaatigala" target="_blank" style={{ color: '#aaaaaa', textDecoration: 'none' }}>
                GitHub
              </Link>
            
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="h3" sx={{ mb: 2 }}>
              Services
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('projects');
                }}
                style={{ color: '#aaaaaa', textDecoration: 'none' }}
              >
                Web Development
              </Link>
              <Link
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('projects');
                }}
                style={{ color: '#aaaaaa', textDecoration: 'none' }}
              >
                Mobile Apps
              </Link>
              <Link
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('projects');
                }}
                style={{ color: '#aaaaaa', textDecoration: 'none' }}
              >
                Software Solutions
              </Link>
              <Link
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('contact');
                }}
                style={{ color: '#aaaaaa', textDecoration: 'none' }}
              >
              </Link>
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ textAlign: 'center', pt: 4, borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
          <Typography variant="body2" color="text.secondary">
            &copy; 2025 Sadeepa Atigala. All rights reserved. | Designed with passion ❤️
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}