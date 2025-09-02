import { Box, Typography } from '@mui/material';
import TimelineItem from '@/components/TimelineItem';

export default function Education() {
  return (
    <Box id="education" sx={{ py: 8 }}>
      <Box sx={{ maxWidth: 800, mx: 'auto', px: 2 }}>
        <Typography variant="h2" sx={{ textAlign: 'center', mb: 6 }}>
          Education
        </Typography>
          <TimelineItem
            title="BSc. Information Technology"
            subtitle="Sri Lanka Institute of Information Technology (SLIIT)"
            description="I am currently a 4th-year undergraduate student, focusing on software development, database management, cloud computing, IoT, and system analysis. I am actively engaged in both theoretical learning and practical project development"
          />
      </Box>
    </Box>
  );
}