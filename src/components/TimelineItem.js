'use client';

import { useEffect, useRef } from 'react';
import { Box, Typography } from '@mui/material';

export default function TimelineItem({ title, subtitle, description }) {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <Box
      ref={ref}
      sx={{
        p: 2,
        bgcolor: 'background.paper',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '15px',
        my: 4,
        position: 'relative',
        opacity: 0,
        transform: 'translateY(50px)',
        transition: 'all 0.6s ease',
        '&.visible': {
          opacity: 1,
          transform: 'translateY(0)',
        },
        
      }}
    >
      <Typography variant="h3">{title}</Typography>
      <Typography variant="h6" color="text.secondary">{subtitle}</Typography>
      <Typography variant="body1">{description}</Typography>
    </Box>
  );
}