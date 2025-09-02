'use client';

import { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();

  // Mobile if width < 800px
  const isMobile = useMediaQuery('(max-width:800px)');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    if (isMobile) setDrawerOpen(false);
  };

  const sections = ['home', 'about', 'education', 'experience', 'projects', 'contact'];

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          transition: '0.3s',
          bgcolor: scrolled ? theme.palette.background.paper : 'transparent',
          boxShadow: scrolled ? theme.shadows[4] : 'none',
        }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', px: 2 }}>
          <Typography
            variant="h6"
            sx={{ fontWeight: 'bold', cursor: 'pointer' }}
            onClick={() => scrollToSection('home')}
          >
            Sadeepa Atigala
          </Typography>

          {isMobile ? (
            <>
              <IconButton edge="end" color="inherit" onClick={() => setDrawerOpen(true)}>
                <MenuIcon />
              </IconButton>
              <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
                <Box sx={{ width: 200, p: 2 }}>
                  <List>
                    {sections.map((section) => (
                      <ListItem button key={section} onClick={() => scrollToSection(section)}>
                        <ListItemText primary={section.charAt(0).toUpperCase() + section.slice(1)} />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Drawer>
            </>
          ) : (
            <Box sx={{ display: 'flex', gap: 4 }}>
              {sections.map((section) => (
                <Typography
                  key={section}
                  onClick={() => scrollToSection(section)}
                  sx={{
                    cursor: 'pointer',
                    color: theme.palette.text.primary,
                    '&:hover': { color: theme.palette.primary.main },
                  }}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Typography>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>
      <Toolbar /> {/* Spacer for fixed AppBar */}
    </>
  );
}