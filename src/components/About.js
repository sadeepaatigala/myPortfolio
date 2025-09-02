'use client';

import { Box, Typography } from '@mui/material';

export default function About() {
  return (
    <Box
      id="about"
      sx={{
        py: 8,
        bgcolor: 'rgba(20, 20, 20, 0.8)',
        backdropFilter: 'blur(10px)',
      }}
    >
      <Box sx={{ maxWidth: 900, mx: 'auto', px: 2 }}>
        <Typography
          variant="h2"
          sx={{ textAlign: 'center', mb: 6 }}
        >
          About Me
        </Typography>

        <Typography
          variant="body1"
          sx={{ mb: 2, textAlign: 'justify' }}
        >
          I&apos;m a passionate undergraduate student pursuing BSc. Information
          Technology at Sri Lanka Institute of Information Technology (SLIIT).
          With hands-on experience as a Software Developer Intern at AASL and a
          portfolio of individual and academic group projects, I&apos;m dedicated
          to creating innovative solutions and continuously learning new
          technologies.
        </Typography>

        <Typography
          variant="body1"
          sx={{ textAlign: 'justify' }}
        >
          My journey in software development has equipped me with skills in
          modern web technologies, problem-solving, and collaborative
          development. I&apos;m always excited to take on new challenges and
          contribute to meaningful projects.
        </Typography>
      </Box>
    </Box>
  );
}