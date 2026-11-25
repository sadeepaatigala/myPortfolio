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
          
           <TimelineItem
            title="Software Engineering Intern"
            subtitle="hSenid Business Solutions PLC"
            description={<> <b>Software Engineering Intern - hSenid Business Solutions PLC | 3 Months                </b>  
Gained hands-on experience in enterprise software development by contributing to the development and maintenance of HR Information Systems (HRIS). Worked on developing and enhancing software features using C# and ASP.NET within an Agile (Scrum) environment. Participated in debugging, testing, and performance optimization to improve application quality and reliability. Collaborated with cross-functional teams throughout sprint planning, development, and code review processes while gaining practical experience in enterprise-level software engineering practices.</>}
           />
      </Box>
    </Box>
  );
}