'use client';

import { useEffect, useRef } from 'react';
import { Box, Typography, Button, Tooltip, Chip } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function ProjectCard({ title, description, technologies, github, status = 'Completed' }) {
  const ref = useRef(null);

  // Function to determine status color
  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed':
        return 'success.main';
      case 'Ongoing':
        return 'warning.main';
      case 'Planned':
        return 'info.main';
      default:
        return 'grey.500';
    }
  };

  const statusColor = getStatusColor(status);

  const techIcons = {
    'JavaScript': 'https://raw.githubusercontent.com/sadeepaatigala/skill-icons/main/icons/JavaScript.svg',
    'React.js': 'https://raw.githubusercontent.com/sadeepaatigala/skill-icons/main/icons/React-Dark.svg',
    'Node.js': 'https://raw.githubusercontent.com/sadeepaatigala/skill-icons/main/icons/NodeJS-Dark.svg',
    'Next.js': 'https://raw.githubusercontent.com/sadeepaatigala/skill-icons/main/icons/NextJS-Dark.svg',
    'MongoDB': 'https://raw.githubusercontent.com/sadeepaatigala/skill-icons/main/icons/MongoDB.svg',
    'Firebase': 'https://raw.githubusercontent.com/sadeepaatigala/skill-icons/main/icons/Firebase-Dark.svg',
    'Express.js': 'https://raw.githubusercontent.com/sadeepaatigala/skill-icons/main/icons/ExpressJS-Dark.svg',
    'Arduino': 'https://raw.githubusercontent.com/sadeepaatigala/skill-icons/main/icons/Arduino.svg',
    'C': 'https://raw.githubusercontent.com/sadeepaatigala/skill-icons/main/icons/C.svg',
    'C++': 'https://raw.githubusercontent.com/sadeepaatigala/skill-icons/main/icons/CPP.svg',
    'Java': 'https://raw.githubusercontent.com/sadeepaatigala/skill-icons/main/icons/Java-Dark.svg',
    'Python': 'https://raw.githubusercontent.com/sadeepaatigala/skill-icons/main/icons/Python-Dark.svg',
    'PHP': 'https://raw.githubusercontent.com/sadeepaatigala/skill-icons/main/icons/PHP-Dark.svg',
    'Kotlin': 'https://raw.githubusercontent.com/sadeepaatigala/skill-icons/main/icons/Kotlin-Dark.svg',
    'HTML': 'https://raw.githubusercontent.com/sadeepaatigala/skill-icons/main/icons/HTML.svg',
    'CSS': 'https://raw.githubusercontent.com/sadeepaatigala/skill-icons/main/icons/CSS.svg',
    'TailwindCSS': 'https://raw.githubusercontent.com/sadeepaatigala/skill-icons/main/icons/TailwindCSS-Dark.svg',
    'Material-UI': 'https://raw.githubusercontent.com/sadeepaatigala/skill-icons/main/icons/MaterialUI-Dark.svg',
    'Spring Boot': 'https://raw.githubusercontent.com/sadeepaatigala/skill-icons/main/icons/Spring-Dark.svg',
    'MySQL': 'https://raw.githubusercontent.com/sadeepaatigala/skill-icons/main/icons/MySQL-Dark.svg',
    'VSCode': 'https://raw.githubusercontent.com/sadeepaatigala/skill-icons/main/icons/VSCode-Dark.svg',
    'Visual Studio': 'https://raw.githubusercontent.com/sadeepaatigala/skill-icons/main/icons/VisualStudio-Dark.svg',
    'Android Studio': 'https://raw.githubusercontent.com/sadeepaatigala/skill-icons/main/icons/AndroidStudio-Dark.svg',
    'Electron.js': 'https://raw.githubusercontent.com/sadeepaatigala/skill-icons/main/icons/Electron.svg',
    'Git': 'https://raw.githubusercontent.com/sadeepaatigala/skill-icons/main/icons/Git.svg',
    'Figma': 'https://raw.githubusercontent.com/sadeepaatigala/skill-icons/main/icons/Figma-Dark.svg',
    'IntelliJ IDEA': 'https://raw.githubusercontent.com/sadeepaatigala/skill-icons/main/icons/Idea-Dark.svg',
    'Eclipse': 'https://raw.githubusercontent.com/sadeepaatigala/skill-icons/main/icons/Eclipse-Dark.svg',
    'Maven': 'https://raw.githubusercontent.com/sadeepaatigala/skill-icons/main/icons/Maven-Dark.svg',
    'Selenium': 'https://raw.githubusercontent.com/sadeepaatigala/skill-icons/main/icons/Selenium.svg',
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
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
        p: { xs: 2, sm: 3 },
        bgcolor: 'background.paper',
        background: 'linear-gradient(135deg, rgba(20, 20, 20, 0.95) 0%, rgba(40, 40, 40, 0.95) 100%)',
        border: '1px solid rgba(255, 255, 255, 0.12)',
        borderRadius: '16px',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        opacity: 0,
        transform: 'translateY(40px)',
        '&.visible': { opacity: 1, transform: 'translateY(0)' },
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: '0 15px 30px rgba(0, 0, 0, 0.5)',
          borderColor: 'rgba(255, 255, 255, 0.25)',
        },
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5, gap: 1 }}>
        <Typography
          variant="h3"
          sx={{
            color: '#f0f0f0',
            fontSize: { xs: '1.4rem', sm: '1.7rem' },
            fontWeight: 'bold',
            flexGrow: 1,
          }}
        >
          {title}
        </Typography>
        <Chip
          label={status}
          size="small"
          sx={{
            bgcolor: statusColor,
            color: 'white',
            fontWeight: 'medium',
            fontSize: '0.7rem',
          }}
        />
      </Box>

      <Typography
        variant="body1"
        sx={{
          mb: 2,
          color: 'text.secondary',
          fontSize: { xs: '0.85rem', sm: '0.95rem' },
          lineHeight: 1.6,
        }}
      >
        {description}
      </Typography>

      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2, alignItems: 'center' }}>
        {technologies.map((tech, idx) => (
          <Tooltip key={idx} title={tech} placement="top">
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              {techIcons[tech] ? (
                <img
                  src={techIcons[tech]}
                  alt={`${tech} icon`}
                  style={{ width: '28px', height: '28px', objectFit: 'contain' }}
                />
              ) : (
                <Typography
                  variant="caption"
                  sx={{
                    px: 1,
                    py: 0.5,
                    bgcolor: 'rgba(100, 100, 100, 0.3)',
                    borderRadius: '12px',
                    color: 'text.primary',
                    fontSize: '0.85rem',
                    fontWeight: 'medium',
                  }}
                >
                  {tech}
                </Typography>
              )}
            </Box>
          </Tooltip>
        ))}
      </Box>

      {github && (
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', alignItems: 'center' }}>
          {Array.isArray(github) ? (
            github.map((link, idx) => (
              <Button
                key={idx}
                variant="outlined"
                size="small"
                startIcon={<GitHubIcon />}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${idx === 0 ? 'Client' : 'Server'} repository for ${title}`}
                sx={{
                  textTransform: 'none',
                  borderColor: 'rgba(255, 255, 255, 0.25)',
                  color: 'text.primary',
                  fontSize: '0.8rem',
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    borderColor: 'rgba(255, 255, 255, 0.4)',
                    bgcolor: 'rgba(255, 255, 255, 0.08)',
                    transform: 'scale(1.03)',
                  },
                }}
              >
                {idx === 0 ? 'Client' : 'Server'} Repo
              </Button>
            ))
          ) : (
            <Button
              variant="outlined"
              size="small"
              startIcon={<GitHubIcon />}
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Repository for ${title}`}
              sx={{
                textTransform: 'none',
                borderColor: 'rgba(255, 255, 255, 0.25)',
                color: 'text.primary',
                fontSize: '0.8rem',
                transition: 'all 0.2s ease',
                '&:hover': {
                  borderColor: 'rgba(255, 255, 255, 0.4)',
                  bgcolor: 'rgba(255, 255, 255, 0.08)',
                  transform: 'scale(1.03)',
                },
              }}
            >
              View Repo
            </Button>
          )}
        </Box>
      )}
    </Box>
  );
}