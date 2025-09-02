'use client';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './Navbar';

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#0a0a0a',
      paper: 'rgba(30, 30, 30, 0.9)',
    },
    primary: {
      main: '#ffffff',
    },
    secondary: {
      main: '#4ecdc4',
    },
    text: {
      primary: '#ffffff',
      secondary: '#aaaaaa',
    },
  },
  typography: {
    fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    h1: { fontSize: '4rem', fontWeight: 700 },
    h2: { fontSize: '3rem', fontWeight: 700 },
    h3: { fontSize: '1.5rem', fontWeight: 600 },
    body1: { fontSize: '1.1rem', lineHeight: 1.8 },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: 'rgba(10, 10, 10, 0.95)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          transition: 'all 0.3s ease',
          '&.scrolled': {
            background: 'rgba(0, 0, 0, 0.98)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '50px',
          textTransform: 'none',
          padding: '0.75rem 1.5rem',
        },
      },
    },
  },
});

export default function ThemeRegistry({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <main>{children}</main>
    </ThemeProvider>
  );
}