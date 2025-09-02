import { Box, Typography, Button } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Contact() {
  return (
    <Box id="contact" sx={{ py: 8, bgcolor: 'rgba(10, 10, 10, 0.9)' }}>
      <Box sx={{ maxWidth: 1200, mx: 'auto', px: 2, textAlign: 'center' }}>
        <Typography variant="h2" sx={{ mb: 4 }}>
          Let&apos;s Connect
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, fontSize: '1.2rem' }}>
          Ready to discuss opportunities or collaborate on exciting projects?
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexDirection: { xs: 'column', md: 'row' } }}>
          <Button
            variant="outlined"
            href="mailto:sadeeatigala@gmail.com"
            startIcon={<EmailIcon />}
            sx={{
              bgcolor: 'rgba(40, 40, 40, 0.9)',
              borderColor: 'rgba(255, 255, 255, 0.2)',
              '&:hover': {
                bgcolor: 'rgba(60, 60, 60, 0.9)',
                borderColor: 'rgba(255, 255, 255, 0.4)',
                transform: 'translateY(-3px)',
              },
            }}
          >
            Email
          </Button>
          <Button
            variant="outlined"
            href="https://www.linkedin.com/in/sadeepa-atigala/"
            target="_blank"
            startIcon={<LinkedInIcon />}
            sx={{
              bgcolor: 'rgba(40, 40, 40, 0.9)',
              borderColor: 'rgba(255, 255, 255, 0.2)',
              '&:hover': {
                bgcolor: 'rgba(60, 60, 60, 0.9)',
                borderColor: 'rgba(255, 255, 255, 0.4)',
                transform: 'translateY(-3px)',
              },
            }}
          >
            LinkedIn
          </Button>
          <Button
            variant="outlined"
            href="https://github.com/sadeepaatigala"
            target="_blank"
            startIcon={<GitHubIcon />}
            sx={{
              bgcolor: 'rgba(40, 40, 40, 0.9)',
              borderColor: 'rgba(255, 255, 255, 0.2)',
              '&:hover': {
                bgcolor: 'rgba(60, 60, 60, 0.9)',
                borderColor: 'rgba(255, 255, 255, 0.4)',
                transform: 'translateY(-3px)',
              },
            }}
          >
            GitHub
          </Button>
        </Box>
      </Box>
    </Box>
  );
}