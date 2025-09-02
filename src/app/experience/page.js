import { Box, Typography } from '@mui/material';
import TimelineItem from '@/components/TimelineItem';

export default function Experience() {
  return (
    <Box id="experience" sx={{ py: 8 }}>
      <Box sx={{ maxWidth: 800, mx: 'auto', px: 2 }}>
        <Typography variant="h2" sx={{ textAlign: 'center', mb: 6 }}>
          Experience
        </Typography>
          <TimelineItem
            title="Software Developer Intern"
            subtitle="AASL (Airport & Aviation Services Sri Lanka)"
            description={<> <b>Software Developer Intern - Airport and Aviation Services Sri Lanka (AASL) | 6 Months </b> 
Gained hands-on experience in full-stack software development by working on real-world projects, including web and desktop applications. Contributed to designing and developing server-side systems, front-end dashboards, real-time media sharing solutions, and applications for video recording and playback. Collaborated with the IT team to implement efficient, scalable, and secure software solutions while learning industry best practices in software development and system integration
            </>   }
           />
      </Box>
    </Box>
  );
}