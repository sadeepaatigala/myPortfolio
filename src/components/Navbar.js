'use client';

import { useState, useEffect } from 'react';
import { AppBar, Toolbar, Box, Typography, Avatar, MenuItem, MenuList, useTheme } from '@mui/material';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AppBar position="fixed" className={scrolled ? 'scrolled' : ''}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', px: 4 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Sadeepa Atigala</Typography>
        </Box>
        <MenuList sx={{ display: 'flex', gap: 4 }}>
          {['home', 'about', 'education', 'experience', 'projects', 'contact'].map((section) => (
            <MenuItem key={section} sx={{ p: 0 }}>
              <Link
                href={`#${section}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(section);
                }}
                style={{
                  color: theme.palette.text.primary,
                  textDecoration: 'none',
                  position: 'relative',
                }}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            </MenuItem>
          ))}
        </MenuList>
      </Toolbar>
    </AppBar>
  );
}