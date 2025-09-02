import { Box, Typography } from '@mui/material';

export default function SkillItem({ icon, title, description }) {
  return (
    <Box
      sx={{
        p: 3,
        bgcolor: 'background.paper',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '15px',
        textAlign: 'center',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'scale(1.05)',
        },
      }}
    >
      <Typography sx={{ fontSize: '3rem', mb: 2 }}>{icon}</Typography>
      <Typography variant="h3" sx={{ mb: 1 }}>
        {title}
      </Typography>
      <Typography variant="body1">{description}</Typography>
    </Box>
  );
}